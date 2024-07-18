package web.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // ResponseBody없이 순수 컨트롤러만 사용
public class ViewController {
    // AJAX 통신용이 아닌 순수 템플릿 반환하는 컨트롤러
    // index page return (HTML)
    @GetMapping("/") // 페이지 요청은 HTTP의 GET 방식을 주로 사용한다.
    public String index() {
        System.out.println("ViewController.index");
        return "/index.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }

    // ========== 2 - 회원 관련 ==============
    // 회원가입 page return (HTML)
    @GetMapping("/member/signup")
    public String mSignup() {
        System.out.println("ViewController.mSignup");
        return "/member/signup.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }

    // 로그인 page return (HTML)
    @GetMapping("/member/login")
    public String mLogin() {
        System.out.println("ViewController.mLogin");
        return "/member/login.html"; // 템플릿 폴더내 반환할 경로와 파일명
    }

    // 아이디 찾기 page return (HTML)
    @GetMapping("/member/findid")
    public String mFindid() {
        System.out.println("ViewController.mFindid");
        return "member/findid.html";
    }

    // 비밀번호 찾기 page return (HTML)
    @GetMapping("/member/findpw")
    public String mFindpw() {
        System.out.println("ViewController.mFindpw");
        return "member/findpw.html";
    }

}
