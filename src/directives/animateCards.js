const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver)=>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('card');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
);
export default{
    bind(el){
        el.classList.add('card-animate');
        animatedScrollObserver.observe(el);
    }
}