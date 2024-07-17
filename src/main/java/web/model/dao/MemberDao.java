package web.model.dao;

import org.springframework.stereotype.Component;
import web.model.dto.MemberDto;

@Component
public class MemberDao extends Dao {
    public boolean mSignup(final MemberDto mDto) {
        try {
            final String sql = "insert into member(id, pw, name, email, phone) values(?, ?, ?, ?, ?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, mDto.getId());
            ps.setString(2, mDto.getPw());
            ps.setString(3, mDto.getName());
            ps.setString(4, mDto.getEmail());
            ps.setString(5, mDto.getPhone());
            ps.executeUpdate();
            return true;
        } catch (final Exception e) {
            System.out.println(e);
        } // try end
        return false;
    } // mSignup end

    public boolean mLogin(final MemberDto mDto) {
        try {
            final String sql = "select * from member where id = ? and pw = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, mDto.getId());
            ps.setString(2, mDto.getPw());
            rs = ps.executeQuery();
            return rs.next();
        } catch (final Exception e) {
            System.out.println(e);
        } // try end
        return false;
    }
}
