package web.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // ResponseBody없이 순수 컨트롤러만 사용
public class ViewController {
    // AJAX 통신용이 아닌 순수 템플릿 반환하는 컨트롤러
    // ========== 1 - 레이아웃 ===============
    @GetMapping("/") // 페이지 요청은 HTTP의 GET 방식을 주로 사용한다.
    public String index() {
        return "/index.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }

    // ========== 2 - 회원 관련 ==============
    @GetMapping("/member/signup")
    public String mSignup() {
        return "/member/signup.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }

    @GetMapping("/member/login")
    public String mLogin() {
        return "/member/login.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }
}
