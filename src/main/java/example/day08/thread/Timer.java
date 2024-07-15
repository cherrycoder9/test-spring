package example.day08.thread;

public class Timer implements Runnable {
    public int second; // 타이머의 초를 저장하는 변수
    public boolean state = true; // 타이머 실행 상태


    @Override
    public void run() {
        while (state) {
            this.second++;
            System.out.println("timer: " + this.second);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        } // while end
    } // run end
} // class end
