package web;

import example.day02.consolemvc.view.PhoneView;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppStart {
    public static void main(String[] args) { // class start
        PhoneView.getInstance().run();
    } // main 메서드 end
} // class end

/*
 * 다른 클래스의 함수를 호출하는 방법
 *   1. 인스턴스(static 없는) 메소드 호출 방법
 *       클래스명 변수명 = new 생성자();
 *       변수명.메소드명();
 *   2. 해당 메소드내 클래스가 싱글톤이면
 *       클래스명.getInstance().메소드명();
 *   3. 해당 메소드가 static 이면
 *       클래스명.메소드명()
 *   4.
 * */