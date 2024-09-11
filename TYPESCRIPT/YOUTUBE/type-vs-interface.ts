type TupleT = [number, number];
[1, 2, 3] as TupleT;

interface Tuple {
    0: number;
    1: number;
}
[1, 2, 3] as Tuple;
