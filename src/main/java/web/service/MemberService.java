package web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.model.dao.MemberDao;
import web.model.dto.MemberDto;

@Service
public class MemberService {
    @Autowired
    MemberDao mDao;

    public boolean mSignup(final MemberDto mDto) {
        return mDao.mSignup(mDto);
    }

    public boolean mLogin(final MemberDto mDto) {
        return mDao.mLogin(mDto);
    }

}
