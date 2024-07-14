package example.day07.todo;

public class TodoDto {
    private int tno;
    private String todo;
    private int completed;

    public TodoDto() {
    }

    public int getTno() {
        return tno;
    }

    public void setTno(final int tno) {
        this.tno = tno;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(final String todo) {
        this.todo = todo;
    }

    public int getCompleted() {
        return completed;
    }

    public void setCompleted(final int completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "TodoDto{" +
                "tno=" + tno +
                ", todo='" + todo + '\'' +
                ", completed=" + completed +
                '}';
    }
}
