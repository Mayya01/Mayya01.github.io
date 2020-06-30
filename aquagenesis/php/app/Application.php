<?php

namespace Meiji\LandingApp;

if (!defined('MJLANDING_BS') || MJLANDING_BS !== true) {
	exit('direct access not allowed');
}

if (!defined('ROOT_PATH')) {
	exit('set ROOT_PATH first');
}

use DI\Container;
use DI\DependencyException;
use DI\NotFoundException;
use Dotenv\Exception\InvalidEncodingException;
use Dotenv\Exception\InvalidFileException;
use Dotenv\Exception\InvalidPathException;
use Laminas\Diactoros\Exception\InvalidArgumentException;
use Laminas\Diactoros\Response;
use Laminas\Diactoros\ServerRequestFactory;
use Laminas\Diactoros\ServerRequest;


/**
 * Class Application
 *
 * @package Meiji\LandingApp
 */
class Application
{
	
	/**
	 * @var \DI\Container
	 */
	private $di;
	
	/**
	 * Application constructor.
	 */
	public function __construct()
	{
		
		$dotenv = \Dotenv\Dotenv::createMutable(ROOT_PATH);
		try {
			$dotenv->load();
		} catch (InvalidEncodingException $e) {
			exit('.env is broken');
		} catch (InvalidFileException $e) {
			exit('.env is broken');
		} catch (InvalidPathException $e) {
			exit('.env is broken');
		}
		
		$this->di = new Container();
		$this->di->set('request', ServerRequestFactory::fromGlobals());
		try {
			$this->di->set('response', new Response());
		} catch (InvalidArgumentException $e) {
			exit('undefined i/o');
		}
	}
	
	/**
	 * @return \DI\Container
	 */
	public function getDI() : Container
	{
		
		return $this->di;
	}
	
	/**
	 * @param string    $content
	 * @param int|null  $code
	 * @param bool|null $exit
	 *
	 * @return \Laminas\Diactoros\Response
	 */
	public function respond(string $content, ?int $code = 200, ?bool $exit = true) : Response
	{
		
		$response = $this->getResponse();
		try {
			$stream = $response->withStatus($code)->getBody();
		} catch (\InvalidArgumentException $e) {
			exit('undefined i/o');
		}
		$stream->write($content);
		$this->sendResponse($response);
		if ($exit) {
			exit;
		}
		
		return $response;
	}
	
	/**
	 * @return \Laminas\Diactoros\Response
	 */
	public function getResponse() : Response
	{
		
		$response = null;
		
		try {
			$response = $this->getDI()->get('response');
		} catch (DependencyException $e) {
			exit('undefined i/o');
		} catch (NotFoundException $e) {
			exit('undefined i/o');
		}
		
		return $response;
	}
	
	/**
	 * @return \Laminas\Diactoros\ServerRequest
	 */
	public function getRequest() : ServerRequest
	{
		
		$request = null;
		
		try {
			$request = $this->getDI()->get('request');
		} catch (DependencyException $e) {
			$this->respond($e->getMessage(), 400);
			
		} catch (NotFoundException $e) {
			$this->respond($e->getMessage(), 400);
		}
		
		return $request;
	}
	
	/**
	 * @param \Laminas\Diactoros\Response $response
	 */
	public function sendResponse(Response $response) : void
	{
		
		\QuimCalpe\ResponseSender\send($response);
	}
	
}
