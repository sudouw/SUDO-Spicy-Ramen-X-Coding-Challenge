
// ███████╗██╗   ██╗██████╗  ██████╗    Chris Oh     Victoria Juan        2018                                              
// ██╔════╝██║   ██║██╔══██╗██╔═══██╗   Claire Kim   Wesley Wei           UW Seattle                                           
// ███████╗██║   ██║██║  ██║██║   ██║   Kelden Lin   Estelle Jiang                                                    
// ╚════██║██║   ██║██║  ██║██║   ██║   Shruti Raj   Scarlett Hwang                                             
// ███████║╚██████╔╝██████╔╝╚██████╔╝   ZK Lin       Alexis Choi                                      
// ╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝                                                                                                                                               
// ███████╗██████╗ ██╗ ██████╗██╗   ██╗    ██████╗  █████╗ ███╗   ███╗███████╗███╗   ██╗    
// ██╔════╝██╔══██╗██║██╔════╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗████╗ ████║██╔════╝████╗  ██║    
// ███████╗██████╔╝██║██║      ╚████╔╝     ██████╔╝███████║██╔████╔██║█████╗  ██╔██╗ ██║    
// ╚════██║██╔═══╝ ██║██║       ╚██╔╝      ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║    
// ███████║██║     ██║╚██████╗   ██║       ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║    
// ╚══════╝╚═╝     ╚═╝ ╚═════╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝                                                                                           
//  ██████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗                                           
// ██╔════╝██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝                                           
// ██║     ██║   ██║██║  ██║██║██╔██╗ ██║██║  ███╗   Can you handle                                       
// ██║     ██║   ██║██║  ██║██║██║╚██╗██║██║   ██║   the heat?                                       
// ╚██████╗╚██████╔╝██████╔╝██║██║ ╚████║╚██████╔╝                                          
//  ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝                                                                                                                  
//  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗              
// ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝              
// ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗                
// ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝                
// ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗              
//  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝              
                                                                                         

// Implement the addition of two numbers (x + y)
// Should return "undefined" for any inputs other 
// than numerical values
function add(x, y) {
    if (isNaN(x) || isNaN(y)) return undefined
    return x + y;
}

// Implement the addition of two numbers (x - y)
// Should return "undefined" for any inputs other 
// than numerical values
function subtract(x, y) {
    if (isNaN(x) || isNaN(y)) return undefined
    return x - y;
}

// Store even numbers from 0 to "num" into an array.
// Return an empty array for negative numbers.
// Return "undefined" for non numerical values.
function printEvens(num) {
    if (isNaN(num) || num == null) return undefined
    var i = 0
    var nums = []
    while (i <= num) {
        nums.push(i)
        i += 2
    }
    return nums;
}

