/* 
gsap.to prend l'état actuel et l'amène vers l'état qu'on a envie.
gsap.to prend 2 paramètres: 
- L'élément qu'on veux animer
- La propriété qu'on veux animer.
*/

/* gsap.to(".text", { y: 100, opacity: 0, duration: 1 });
 */

/* Il y a aussi fromTo, qui amène d'un état qu'on décide vers un autre */
/* 
gsap.fromTo(".text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
 */

/* Ici on crée une timeline qui permet de gérer la durée de l'aniamtion. */
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

/* En utilisant une timeline on peux enchainer les animation les unes après les autres
Elles s'appliquent les unes à la suite des autres sans soucis. */

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);
/* Ici on veux synchroniser l'animation avec l'animation précédente (que les deux animation se déclenchent
    en meme temps, du coup pour ça on ajoute le symbole inférieur '<' à la fin)
    Si on ajoute <50% cela lance la seconde anim quand la première à effectué 50% de la sienne */
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

/* Cookie Jump */
/* Ici on fait monter le cookie, et on ajoute le yoyo qui répète l'anim dans les deux sens
le -1 permet de le faire à l'infini, si on met 2 ça le fait 2 fois */
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");
/* Mise en place de la disparition au click */
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
