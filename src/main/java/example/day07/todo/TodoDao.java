package example.day07.todo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.List;

public class TodoDao {
    // 싱글톤 패턴에 의해 생성된 인스턴스를 반환
    private static final TodoDao tDao = new TodoDao();
    private static final Logger log = LogManager.getLogger(TodoDao.class);
    private Connection conn;

    // private 생성자
    private TodoDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/todo", "root", "1234");
        } catch (final Exception e) {
            log.error("데이터베이스 연결 초기화 오류: ", e);
        }
    }

    // TodoDao 객체를 반환
    public static TodoDao getInstance() {
        return tDao;
    }

    public List<TodoDto> getTodos() {
        final List<TodoDto> todos = new ArrayList<>();
        return null;
    }
}
