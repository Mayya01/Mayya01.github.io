<?

require_once(realpath(__DIR__).'/../../../vendor/autoload.php'); // load composer packages

define('SITE_LANG', 'ru');
define('INCLUDE_DIR', '/local/include/' . SITE_LANG);

require_once 'classes/AutoLoader.php';

\spl_autoload_register('\Brandsearch\AutoLoader::autoLoad');

EnvironmentHelper::initConfigForSite(__DIR__ . '/config', SITE_ID);

/*
// функция отправки электронки
if(file_exists(__DIR__ . '/custom_mail.php'))
    require_once 'custom_mail.php';
*/

//require_once 'redirects.php';

//require_once 'handlers.php';
