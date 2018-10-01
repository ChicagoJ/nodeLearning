// create an Frame array+
var frames = [];
frames[frames.length] = `                                                            
                                                           
                         f########.                         
                      :##;        G##,                      
                     W#.             ##                     
                    #f                 #L                   
                   #                    W#                  
                  #.                     DW                 
                 jK                       #;                
                 #    ;G ,  #              #                
                KG    G.j.      K#D.   j   f#               
                #    D: G  i    #  #  i#    #               
                #   ;G t, ,D    #D#j        #               
                G  .D .D .G      E      Dtj.D               
               ;i  L. D  G.             D G.G,              
               ,i  .     .             G.G Gj,              
                K                      .,G.DG               
                #                       ,.D.#               
                #                        ,f #               
                DD                         GW               
                 #                         #                
                 iW           #;          W                 
                  #         f#:##.       #t                 
                   #       #K  # ##L    Wf                  
                   #t   K##    #   ;##j#.                   
                    #         j#D      K                    
                    #         W #:     :f                   
                    ,D      L#   #.     #                   
                     #      E     .     #                   
                     #                                      
                     .D                                     
                      t                                     
                                                            
                                                            
                      
`;
frames[frames.length] = `                                                            
                               .                            
                               WD       t #                           
                              #  #     K  G                           
                              #   K    E                              
                              #   #                                   
                              #    .    :  :                          
                              t    #    K  t                          
                               #   #    #  t                          
                               #    tE###, t                          
                                #          f##                        
                               #               #                      
                              K.                D#                    
                             W                    #                   
                            :i                    .#.                 
                            #                       W                 
                           .         .#    E        #                 
                           #    ,,,,,,        .      #                
                           #      #                  #                
                           #      #t          ##                      
                           #                   ;     .G               
                           #                   ....   K               
                           #  ...              .....  D               
                           # . ...             ....                   
                           K. ...                    K.               
                            #         ######W      ####               
                            #                     #.  .               
                             #                   #    #               
                              W                  #   #                
                               W.               W   W                 
                                 #,           W#   #                  
                                 #          ##    #                   
                                 #               W                    
                                #               ;                     
                                #  .           #f                     
                               .   :        ##L                       
                               #  K         #                         
                               #  #         #                         
                               #  #         #                         
                                  E         #                         
`;

frames[frames.length] = `                                                            
                                                         .                            
                                               WD       t #                           
                                              #  #     K  G                           
                                              #   K    E                              
                                              #   #                                   
                                              #    .    :  :                          
                                              t    #    K  t                          
                                               #   #    #  t                          
                                               #    tE###, t                          
                                                #          f##                        
                                               #               #                      
                                              K.                D#                    
                                             W                    #                   
                                            :i                    .#.                 
                                            #                       W                 
                                           .         .#    E        #                 
                                           #    ,,,,,,        .      #                
                                           #      #                  #                
                                           #      #t          ##                      
                                           #                   ;     .G               
                                           #                   ....   K               
                                           #  ...              .....  D               
                                           # . ...             ....                   
                                           K. ...                    K.               
                                            #         ######W      ####               
                                            #                     #.  .               
                                             #                   #    #               
                                              W                  #   #                
                                               W.               W   W                 
                                                 #,           W#   #                  
                                                 #          ##    #                   
                                                 #               W                    
                                                #               ;                     
                                                #  .           #f                     
                                               .   :        ##L                       
                                               #  K         #                         
                                               #  #         #                         
                                               #  #         #                         
                                                  E         #                         
`;

var fps = 10;
var cnt = 0;
var render = () => {
    // clear the console
    // console.log('\033[2J')
    process.stdout.write('\033[2J');
    // output new content 
    // console.log(cnt++);
    if (cnt != frames.length) {
      process.stdout.write(frames[cnt++]);

    } else 
      cnt = 0;

}

setInterval(render, 1000 / fps);