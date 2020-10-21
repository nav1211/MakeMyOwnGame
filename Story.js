class Story{

    constructor(){
        //this.title = createElement('h2');
        this.story = createElement('h3'); 
    }

    display(){
        //this.title.html("Daring Mountain Escape");
        //this.title.position(displayHeight-200, 100);
        this.story.html("One night, Timothy was being chased by a coup. After escaping for 30 minutes, he ran into a mountain. There is no time to waste, he must escape to his city as quick as possible. It is now up to you to save Timothy.");
        this.story.position(displayHeight-850, 200);
    }

    hide(){
        //this.title.hide();
        this.story.hide();
    }
}