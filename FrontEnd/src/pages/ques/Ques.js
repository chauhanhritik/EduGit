import React from "react";
import Questions from "../questions/Questions";
// import React from 'react'

export default function Ques() {
    return (
        <div>
            <Questions sno='1' question='Find the maximum and minimum element in an array' mode="Beginner"/>
            <Questions sno='2' question='Find the "Kth" max and min element of an array  ' mode="Beginner"/>
            <Questions sno='3' question='Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo' mode="Beginner"/>
            <Questions sno='4' question='Minimise the maximum difference between heights [V.IMP]' mode="Beginner"/>
        </div>
    )
}
// question={''} Sno={''} status={''}