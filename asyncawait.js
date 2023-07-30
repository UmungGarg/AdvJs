console.log('person1: shows ticket');
        console.log('person2: shows ticket');

        const preMovie = async () => {
            const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
                setTimeout(()=>resolve('ticket'),3000);
            });
            let ticket = await promiseWifeBringingTicks;

            console.log('wife : i have the ticket');
            console.log('husband : we should go in');
            console.log('wife : no i am hungry');


            const getPopcorn = await new Promise((resolve, reject)=> resolve('popcorn'));
            console.log(`husband : i got some ${getPopcorn}`);
            console.log('husband : we should go in');
            console.log('wife : i need butter on my popcorn');

            const addButter = new Promise((resolve, reject)=> resolve('butter'));

            const getColdDrinks = new Promise((resolve, reject)=> resolve('coke'));
            

            let butter = await addButter;

            console.log(`husband : i got some ${butter} on popcorn`);
            console.log('husband : anything else darling?');
            console.log('wife : lets go we are getting late');
            console.log('husband : Thank you for the  reminder *grins*');

            let coke = await getColdDrinks;
            console.log('husband : i got some coke');

            console.log('husband : Thank you for this');

            return ticket;

        }
        preMovie().then((m)=> console.log('person3: shows ticket'));

        console.log('person4: shows ticket');
        console.log('person5: shows ticket');