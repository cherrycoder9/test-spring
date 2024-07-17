package example.day10.makegeneric;

public class AppStart {
    public static void main(final String[] args) {
        final MyArrayList<Integer> mal = new MyArrayList<>();
        for (int i = 0; i < 15; i++) {
            mal.add(i);
        }
        mal.remove(3);
        System.out.println(mal);
    }
}
