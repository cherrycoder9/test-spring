package example.day07.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
    private final TodoDao tDao = TodoDao.getInstance();

    @GetMapping
    public List<TodoDto> getTodos() {
        return tDao.getTodos();
    }
}
