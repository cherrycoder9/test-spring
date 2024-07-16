package example.practice.threadtest1;

public class SyncMultiThread extends Thread {
    private static long totalSum = 0; // 공유
    private int startNum;
    private int endNum;

    public SyncMultiThread() {

    }

    public SyncMultiThread(final int startNum, final int endNum) {
        this.startNum = startNum;
        this.endNum = endNum;
    }

    private static void addToTotalSum(final long sum) {
        totalSum += sum;
    }

    static long getTotalSum() {
        return totalSum;
    }

    @Override
    public void run() {
        startCalc();
    }

    public void startCalc() {
        long sum = 0;
        for (int i = startNum; i <= endNum; i++) {
            sum += ((i * 2L / 3) % 100);
        }
        addToTotalSum(sum);
    }
}
