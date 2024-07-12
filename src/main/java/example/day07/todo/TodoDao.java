package example.day07.todo;

public class TodoDao {
    private static final TodoDao tDao = new TodoDao();

    private TodoDao() {

    }

    public static TodoDao getInstance() {
        return tDao;
    }
}
