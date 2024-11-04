let nom1 = ["the", "our", "little"]
let nom2 = ["great", "friendly", "bud"]
let nom3 = ["jogger", "raccon", "bendy"]

for(let sum1 = 0; sum1 < nom1.length; sum1++) {
    for(let sum2 = 0; sum2 < nom2.length; sum2++ ) {
        for(let sum3 = 0; sum3 < nom3.length; sum3++) {
            console.log(nom1[sum1] + nom2[sum2] + nom3[sum3] + ".com")
        }
    }
}