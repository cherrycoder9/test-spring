package example.day07.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {
    private final TodoDao tDao = TodoDao.getInstance();

    @GetMapping
    public List<TodoDto> getTodos() {
        return tDao.getTodos();
    }

    @PutMapping("/update")
    public boolean putTodos(@RequestParam("id") final int id) {
        return tDao.putTodos(id);
    }
}
