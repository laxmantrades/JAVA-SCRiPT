//here you will learn about the lexical scoping

function user() {
    let user="laxman"
    function print() {
        console.log(user);//inside function can access the outer function scope
        //Parents can give icecream to the children but children can't give or share icrecream to others
        
        
    }
    function print2(){
        console.log(user);
        //Parents can give icecream to the children but children can't give or share icrecream to others
    }
    print()
    print2()
    
}
user()