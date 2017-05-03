//- The interface that all `Number` values will need to implement.
//-
//- ```haskell
//- interface Number a: Parity a, Visible a
//-     (+), (-), (⋆)  :: a -> a
//-     negate         :: () -> a
//-     abs, signum    :: () -> a
//-     toNative       :: () -> b
//- ```
//-
//- This interface offers no default implementations as all implementations will need to be able to represent 0 and 1.

module.exports = {
};
