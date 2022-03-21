package com.ramen.ramen.exhandler;

import com.ramen.ramen.controller.member.MemberController;
import com.ramen.ramen.controller.ramen.RamenController;
import com.ramen.ramen.exception.MemberNotFoundException;
import com.ramen.ramen.exception.RamenNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice(assignableTypes = {MemberController.class, RamenController.class})
public class ExControllerAdvice {

    @ExceptionHandler(MemberNotFoundException.class)
    public ResponseEntity<ErrorResponse> MemberNotFoundExHandler(MemberNotFoundException e) {
        log.error("[exceptionHandler] ex", e);
        ErrorResponse errorResponse = ErrorResponse.builder().message("멤버를 찾을 수 없습니다").build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @ExceptionHandler(RamenNotFoundException.class)
    public ResponseEntity<ErrorResponse> RamenNotFoundExHandler(RamenNotFoundException e) {
        log.error("[exceptionHandler] ex", e);
        ErrorResponse errorResponse = ErrorResponse.builder().message("라면을 찾을 수 없습니다").build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
}
