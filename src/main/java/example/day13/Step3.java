package example.day13;

import java.util.TreeSet;

public class Step3 {
    public static void main(final String[] args) {
        // 1.
        final TreeSet<Member> members = new TreeSet<>();

        // 2.
        members.add(new Member("Charlie", 28));
        members.add(new Member("David", 32));
        members.add(new Member("Alice", 25));
        members.add(new Member("Bob", 30));
        System.out.println("members = " + members);
    } // main end 
} // class end 
