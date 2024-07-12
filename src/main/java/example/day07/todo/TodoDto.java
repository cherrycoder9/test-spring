package example.day07.todo;

public class TodoDto {
    private int tno;
    private String content;
    private int completed;

    public TodoDto() {
    }

    public TodoDto(int tno, String content, int completed) {
        this.tno = tno;
        this.content = content;
        this.completed = completed;
    }

    public int getTno() {
        return tno;
    }

    public void setTno(int tno) {
        this.tno = tno;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getCompleted() {
        return completed;
    }

    public void setCompleted(int completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "TodoDto{" +
                "tno=" + tno +
                ", content='" + content + '\'' +
                ", completed=" + completed +
                '}';
    }
}
