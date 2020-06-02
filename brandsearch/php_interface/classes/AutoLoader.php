<?

namespace Brandsearch;

/**
 * Автозагрузчик для пространства Brandsearch
 *
 * Class AutoLoader
 *
 * @author Artem Iksanov <iksanov@rekuz.ru>
 *
 * @package Brandsearch
 */
class AutoLoader
{
	/**
	 * Название пространства
     */
	const PROJECT_NAMESPACE = 'Brandsearch';

	/**
	 * Признак рекурсивной загрузки классов
	 *
	 * @var bool
     */
	static private $recursiveSearch = true;

	/**
	 * Конструктор класса
     */
	public function __construct()
	{}

	/**
	 * Возвращает текущую директорию
	 *
	 * @return string
	 */
	protected static function getBasePath()
	{
		return __DIR__;
	}

	/**
	 * Метод определения полного пути к подключаемому файлу
	 *
	 * @param string $path
	 * @param string $file
	 *
	 * @return string
	 */
	protected static function generateFilePath($path, $file)
	{
		return str_replace(
			sprintf('/%s/', self::PROJECT_NAMESPACE),
			'/',
			sprintf('%s/%s.php', $path, str_replace('\\', '/', $file))
		);
	}

	/**
	 * Метод непосредственного подключения файла
	 *
	 * @param string $file
	 */
	public static function autoLoad($file)
	{
		$path = self::getBasePath();
		$filePath = self::generateFilePath($path, $file);

		if (file_exists($filePath)) {
			require_once($filePath);
		} else {
			self::$recursiveSearch = true;

			self::recursiveLoad($file, $path);
		}
	}

	/**
	 * Метод рекурсивной загрузки классов
	 *
	 * @param string $file
	 * @param string $path
	 */
	public static function recursiveLoad($file, $path)
	{
		if (false !== ($handle = opendir($path)) && self::$recursiveSearch) {
			while (false !== ($dir = readdir($handle)) && self::$recursiveSearch) {
				if (strpos($dir, '.') === false) {
					$path2 = $path . '/' . $dir;
					$filePath = $path2 . '/' . $file . '.php';

					if (file_exists($filePath)) {
						self::$recursiveSearch = false;

						require_once($filePath);

						break;
					}

					self::recursiveLoad($file, $path2);
				}
			}

			closedir($handle);
		}
	}
}
