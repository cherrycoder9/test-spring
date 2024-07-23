package web.service;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AuthService {
    @Autowired
    HttpServletRequest request; // HTTP 요청 객체

    // 인증번호 생성 요청 service
    public boolean generateCode() {
        try {
            System.out.println("AuthService.generateCode");
            // 인증번호가 문자인 이유: 앞자리에 0이 들어갈 수도 있으니까.
            final String authCode; // example
            // 6자리 난수 코드 생성
            final Random random = new Random();
            authCode = String.format("%06d", random.nextInt(1000000));
            System.out.println("authCode = " + authCode);
            // (선택) DB(영구적인데이터) vs JVM(스택,힙,메소드) vs 세션(요청되는브라우저마다)
            // 세션을 이용하는 방법
            // 1. 서버 세션에 인증 코드를 저장
            request.getSession().setAttribute("authCode", authCode);
            // 2. 서버 세션에 인증 코드 시간 설정
            // 세션의 생명주기 (세션이 유지되는 시간)
            request.getSession().setMaxInactiveInterval(100);
            // 3. 이메일로 전송
            return true;
        } catch (final Exception e) {
            System.out.println(e);
        }
        return false;
    }


    // 인증번호 입력값 검증 service
    public boolean checkCode(final String authCodeInput) {
        System.out.println("AuthService.checkCode");
        // 자바 세션에 저장된 것을 가지고 와서 비교해야 함
        // 일단 세션 객체의 인증번호가 존재하는지 안하는지 확인
        final Object object = request.getSession().getAttribute("authCode");
        if (object != null) {
            final String authCode = (String) object; // 강제 타입 변환
            // 입력받은 인증번호와 세션 인증번호를 비교
            if (authCode.equals(authCodeInput)) {
                // 일치하면 authCode 속성 삭제
                System.out.println("authCode = " + authCode);
                System.out.println("authCodeInput = " + authCodeInput);
                request.getSession().removeAttribute("authCode");
                return true;
            } else {
                System.out.println("authCode = " + authCode);
                System.out.println("authCodeInput = " + authCodeInput);
            }
        }
        return false;
    }
}
