<?php

namespace Meiji\LandingApp\Mail;

if (!defined('MJLANDING_BS') || MJLANDING_BS !== true) {
	exit('direct access not allowed');
}

/**
 * Class Callback
 *
 * @package Meiji\LandingApp\Mail
 */
class Callback extends StandardMail
{
	
	/**
	 * @var null
	 */
	private $contentHeading = null;
	
	/**
	 * @var null
	 */
	private $contentAnalytics = null;
	
	/**
	 * Callback constructor.
	 */
	public function __construct()
	{
		
		parent::__construct();
	}
	
	/**
	 * @param $params
	 * @param $siteName
	 *
	 * @return $this
	 */
	public function textHeading($params, $siteName = null)
	{
		
		if (!$siteName) {
			if ($_ENV['SITE_NAME']) {
				$siteName = $_ENV['SITE_NAME'];
			}
		}
		
		$phone = $params['phone'];
		
		if (!empty($params['phone'])) {
			$phoneNumberUtil = \libphonenumber\PhoneNumberUtil::getInstance();
			
			$phoneNumberObject = null;
			try {
				$phoneNumberObject = $phoneNumberUtil->parse($params['phone'], 'RU');
			} catch (\libphonenumber\NumberParseException $exception) {
				$phone = $params['phone'];
			}
			
			if (!empty($phoneNumberObject) && $phoneNumberUtil->isValidNumber($phoneNumberObject)) {
				$phone = $phoneNumberUtil->format($phoneNumberObject, \libphonenumber\PhoneNumberFormat::E164);
			}
		}
		
		$this->contentHeading = 'На сайте ' .
								$siteName .
								' посетитель оставил заявку на обратный звонок.' .
								"\n" .
								"\n";
		$this->contentHeading .= 'Имя посетителя: ' . $params['name'] . "\n";
		$this->contentHeading .= 'Телефон посетителя: ' . $phone . "\n";
		
		return $this;
		
	}
	
	/**
	 * @param $params
	 *
	 * @return $this
	 */
	public function textAnalytics($params)
	{
		
		$this->contentAnalytics = 'Аналитические данные:' . "\n";
		$this->contentAnalytics .= 'Идентификатор посетителя: ' . $params['ymClientId'] . "\n";
		$this->contentAnalytics .= 'Вид трафика: ' . $params['typ'] . "\n";
		$this->contentAnalytics .= 'Источник трафика: ' . $params['src'] . "\n";
		$this->contentAnalytics .= 'Тип трафика: ' . $params['mdm'] . "\n";
		$this->contentAnalytics .= 'Рекламная кампания: ' . $params['cmp'] . "\n";
		$this->contentAnalytics .= 'Тип объявления: ' . $params['cnt'] . "\n";
		$this->contentAnalytics .= 'Ключевое слово: ' . $params['trm'] . "\n";
		$this->contentAnalytics .= 'Дата и время визита: ' . $params['fd'] . "\n";
		$this->contentAnalytics .= 'Страница входа: ' . $params['ep'] . "\n";
		// $this->contentAnalytics .= 'Исходная страница: ' . $params['rf'] . "\n";
		// $this->contentAnalytics .= 'Изменение URL за сессию: ' . $params['pgs'] . "\n";
		$this->contentAnalytics .= 'Страница конверсионного действия: ' . $params['cpg'] . "\n";
		$this->contentAnalytics .= 'Количество посещений сайта: ' . $params['vst'] . "\n";
		$this->contentAnalytics .= 'IP-адрес посетителя: ' . $params['uip'] . "\n";
		$this->contentAnalytics .= 'Браузер посетителя: ' . $params['uag'] . "\n";
		
		return $this;
	}
	
	/**
	 * @return \Meiji\LandingApp\Mail\StandardMail
	 */
	public function send()
	{
		
		$resultContent = $this->contentHeading .
						 "\n" .
						 $this->contentAnalytics .
						 "\n" .
						 'Сообщение сгенерированно автоматически.';
		
		$this->text($resultContent);
		
		return parent::send();
	}
	
}
