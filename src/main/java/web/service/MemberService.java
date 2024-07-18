package web.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.model.dao.MemberDao;
import web.model.dto.MemberDto;

@Service
public class MemberService {
    @Autowired
    MemberDao mDao;
    @Autowired // 현재 요청을 보낸 클라이언트의 HTTP 요청 정보를 가지고 있는 객체를 주입
    HttpServletRequest request;

    // 회원가입 service
    public boolean mSignup(final MemberDto mDto) {
        System.out.println("MemberService.mSignup");
        return mDao.mSignup(mDto);
    }

    // 로그인 service
    public boolean mLogin(final MemberDto mDto) {
        System.out.println("MemberService.mLogin");
        int result = mDao.mLogin(mDto);
        // 만약 로그인 성공하면
        if (result >= 1) {
            // 빌더패턴: 생성자가 아닌 메소드를 이용한 방식의 객체 생성
            MemberDto loginDto = MemberDto.builder()
                    .no(result)
                    .id(mDto.getId())
                    .build();
            // HTTP 세션 처리
            // 1. 현재 요청을 보내온 클라이언트의 세션 객체 호출
            HttpSession session = request.getSession();
            // 2. 세션객체에 속성 추가
            session.setAttribute("loginDto", loginDto);
            // 3. 쿠키 설정 추가 생략
            return true;
        }
        return false;
    }

    // 로그인 상태를 반환하는 service
    public MemberDto mLoginCheck() {
        System.out.println("MemberService.mLoginCheck");
        HttpSession session = request.getSession();
        MemberDto loginDto = (MemberDto) session.getAttribute("loginDto");
        System.out.println("MemberService.mLoginCheck loginDto = " + loginDto);
        return loginDto;
    }

    // 로그아웃: 세션 초기화 service
    public void mLogout() {
        System.out.println("MemberService.mLogout");
        // 1. 현재 요청을 보내온 클라이언트의 세션객체 호출
        HttpSession session = request.getSession();
        System.out.println("로그아웃: " + session.getAttribute("loginDto"));
        // 2. 세션 객체내 모든 속성 값 초기화
        session.invalidate();
    }

    // 아이디 찾기 service
    public String mFindid(final MemberDto mDto) {
        System.out.println("MemberService.mFindid");
        return mDao.mFindid(mDto);
    }


    // 비밀번호 찾기 service
    public String mFindpw(final MemberDto mDto) {
        System.out.println("MemberService.mFindpw");
        return mDao.mFindpw(mDto);
    }

    // 내정보 화면 service
    public MemberDto mMyinfo() {
        System.out.println("MemberService.mInfo");
        int no = mLoginCheck().getNo();
        System.out.println("MemberService:mMyinfo() no: " + no);
        return mDao.mMyinfo(no);
    }

}
