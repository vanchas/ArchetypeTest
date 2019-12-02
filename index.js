let questions = [
    {
       "archetypeId": 1,
       "question": "Я исхожу из того, что люди, с которыми я общаюсь, заслуживают доверия"
     },
     {
       "archetypeId": 2,
       "question": "Я не люблю быть в одиночестве"
     },
     {
       "archetypeId": 3,
       "question": "Соревнования заводят и активизируют меня"
     }
   ];
   
   let answers = [
     {
       'weight': 1,
       'answer': "Полностью не согласен"
     },
     {
       'weight': 2,
       'answer': "Не согласен"
     },
     {
       'weight': 3,
       'answer': "Не уверен"
     },
     {
       'weight': 4,
       'answer': "Согласен"
     },
     {
       'weight': 5,
       'answer': "Полностью согласен"
     }
   ];
   
   let form = document.createElement('form');
   form.className = 'wrapper';
   document.body.append(form);
   
   function renderForm(x,y) {
     
     let fieldset = document.createElement('fieldset');
     form.append(fieldset);
     fieldset.className = 'container';
   
     let legend = document.createElement('legend');
     fieldset.append(legend);
     legend.className = 'question';
     legend.textContent = x.question;
     
     answers.forEach((i,v) => {
       renderInputAndLabel(i,v);
     });
     
     function renderInputAndLabel(i,v) {
       let label = document.createElement('label');
       fieldset.append(label);
       label.className = 'label';
       label.textContent = answers[v].answer;
       
       let input = document.createElement('input');
       label.prepend(input);
       input.className = 'label';
       input.setAttribute('type', 'radio');
     }
   }
   
   questions.forEach((x) => {
      renderForm(x);  
   });
   
   let containerCollection = document.querySelectorAll('.container');
   //set attribute 'name' for inputs
   containerCollection.forEach((j,v) => {
     j.children[1].children[0].setAttribute('name', v);
     j.children[2].children[0].setAttribute('name', v);
     j.children[3].children[0].setAttribute('name', v);
     j.children[4].children[0].setAttribute('name', v);
     j.children[5].children[0].setAttribute('name', v);
   });
   
   let submit = document.createElement('input');
   submit.setAttribute('type', 'submit');
   submit.className = 'btn-submit';
   form.append(submit);