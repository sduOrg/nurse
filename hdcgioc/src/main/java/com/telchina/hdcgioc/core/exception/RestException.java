package com.telchina.hdcgioc.core.exception;

@SuppressWarnings("serial")
public class RestException extends RuntimeException {

	public RestException(String message) {
		super(message);
	}

	public RestException(Throwable cause) {
		super(cause);
	}

	public RestException(String message, Throwable cause) {
		super(message, cause);
	}
}
