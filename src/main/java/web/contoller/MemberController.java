package web.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import web.model.dto.MemberDto;
import web.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    MemberService mService;

    @PostMapping("/signup")
    public boolean mSignup(
            @RequestParam("id") final String id,
            @RequestParam("pw") final String pw,
            @RequestParam("name") final String name,
            @RequestParam("email") final String email,
            @RequestParam("phone") final String phone
    ) {
        System.out.println("MemberController.mSignup");
        final MemberDto mDto = new MemberDto();
        mDto.setId(id);
        mDto.setPw(pw);
        mDto.setName(name);
        mDto.setEmail(email);
        mDto.setPhone(phone);
        System.out.println("mDto = " + mDto);
        return mService.mSignup(mDto);
    }

    @PostMapping("/login")
    public boolean mLogin(
            @RequestParam("id") final String id,
            @RequestParam("pw") final String pw
    ) {
        System.out.println("MemberController.mLogin");
        final MemberDto mDto = new MemberDto();
        mDto.setId(id);
        mDto.setPw(pw);
        System.out.println("mDto = " + mDto);
        return mService.mLogin(mDto);
    }
}
