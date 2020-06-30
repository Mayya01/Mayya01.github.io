<?php

namespace Meiji\LandingApp\Mail;

use Laminas\Mail\Exception\InvalidArgumentException;


if (!defined('MJLANDING_BS') || MJLANDING_BS !== true) {
	exit('direct access not allowed');
}

/**
 * Class StandardMail
 *
 * @package Meiji\LandingApp\Mail
 */
class StandardMail
{
	
	/**
	 * @var array
	 */
	private static $preconfigureConnections = [
		'smtp.yandex.ru' => [
			'name'              => 'smtp.yandex.ru',
			'host'              => 'smtp.yandex.ru',
			'port'              => 465,
			'connection_class'  => 'login',
			'connection_config' => [
				'username' => null,
				'password' => null,
				'ssl'      => 'SSL'
			]
		]
	];
	
	/**
	 * @var \Laminas\Mail\Transport\TransportInterface
	 */
	private $transport;
	
	/**
	 * @var \Laminas\Mail\Message
	 */
	private $message;
	
	/**
	 * StandardMail constructor.
	 */
	public function __construct()
	{
		
		$this->message = new \Laminas\Mail\Message();
	}
	
	/**
	 * @return \Meiji\LandingApp\Mail\StandardMail
	 */
	public function initEnv()
	{
		
		return $this->smtp($_ENV['SMTP_SERVICE'], [
			'username' => $_ENV['SMTP_USERNAME'],
			'password' => $_ENV['SMTP_PASSWORD']
		])->from($_ENV['MAIL_FROM'])->to($_ENV['MAIL_TO'])->bcc($_ENV['MAIL_BCC']);
	}
	
	/**
	 * @param      $connection
	 * @param null $params
	 *
	 * @return $this
	 */
	public function smtp($connection, $params = null)
	{
		
		if (is_array($connection)) {
			$smtpOpts = $connection;
		} else {
			$smtpOpts = static::$preconfigureConnections[ $connection ];
		}
		
		if ($params) {
			if ($params['username']) {
				$smtpOpts['connection_config']['username'] = $params['username'];
			}
			if ($params['password']) {
				$smtpOpts['connection_config']['password'] = $params['password'];
			}
		}
		
		$this->transport = new \Laminas\Mail\Transport\Smtp();
		$this->transport->setOptions(new \Laminas\Mail\Transport\SmtpOptions($smtpOpts));
		
		return $this;
	}
	
	/**
	 * @return $this
	 */
	public function send()
	{
		
		$this->transport->send($this->message);
		
		return $this;
	}
	
	/**
	 * @param $from
	 *
	 * @return $this
	 */
	public function from($from)
	{
		
		$this->message->setFrom($from);
		
		return $this;
	}
	
	/**
	 * @param $to
	 *
	 * @return $this
	 */
	public function to($to)
	{
		
		$this->message->addTo($to);
		
		return $this;
	}
	
	/**
	 * @param $bcc
	 *
	 * @return $this
	 */
	public function bcc($bcc)
	{
		
		$this->message->addBcc($bcc);
		
		return $this;
	}
	
	/**
	 * @param $subject
	 *
	 * @return $this
	 */
	public function subject($subject)
	{
		
		$this->message->setSubject($subject);
		
		return $this;
	}
	
	/**
	 * @param $text
	 *
	 * @return $this
	 */
	public function text($text)
	{
		
		try {
			$this->message->setBody($text);
		} catch (InvalidArgumentException $e) {
			// ?
		}
		
		return $this;
	}
	
}
