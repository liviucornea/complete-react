import React from 'react';



function Test(theInput: any) {
    // the best implementatio is to use : useParams
    // see this url for more info: https://reacttraining.com/blog/react-router-v5-1
    // as an working example see todo-edit.tsx whixh is using this approach
    return (
        <div>
            <span>This is a component used for various test purpose during application life span</span>
            <div>
                <span> Now we try to analise some routing params usages</span>
            </div>
            <div>
            { theInput &&  theInput.match && theInput.match.params ?  
                  <span>Parmeter passed  via match router prams is {theInput.match.params.testparam}</span> :
                  <span>No input params </span>
                }  
                
            </div>
            <div>
                 { theInput && theInput.second &&
                    <span>Second parameter passed in App.tsx via Route definition is {theInput.second}</span>
                    }
                
            </div>
        </div>
    );
}

export default Test;