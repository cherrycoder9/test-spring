package example.day02.consolemvc.controller;

import example.day02.consolemvc.model.dao.PhoneDao;
import example.day02.consolemvc.model.dto.PhoneDto;

import java.util.ArrayList;

public class PhoneController {
    // [1] 싱글톤 패턴
    private static final PhoneController phoneController = new PhoneController();

    private PhoneController() {
    }

    public static PhoneController getInstance() {
        return phoneController;
    }

    // 1.
    public boolean postPhone(PhoneDto phoneDto) {
        return PhoneDao.getInstance().postPhone(phoneDto);
    }

    // 2.
    public ArrayList<PhoneDto> getPhone() {
        return PhoneDao.getInstance().getPhone();
    }
}
