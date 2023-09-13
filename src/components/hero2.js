import React, { useEffect } from 'react';
import '../styles/globals.css'; // Make sure to adjust the path to your CSS file
import logo from '../../public/assets/image 2.png'
function Hero2() {
  // Function to handle the scroll event for changing the navbar style
  function handleScroll() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 100) {
      navbar.classList.add('bg-color-primary-dark');
      navbar.classList.add('border-b');
      navbar.classList.add('border-color-gray');
    } else {
      navbar.classList.remove('bg-color-primary-dark');
      navbar.classList.remove('border-b');
      navbar.classList.remove('border-color-gray');
    }
  }

  // Function to toggle the mobile menu
  function toggleMobileMenu() {
    const menu = document.querySelector('#menu');
    const faSolid = document.querySelector(".fa-solid");

    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
  }

  // Function to show user reviews
  function showReview(event) {
    const userTexts = document.getElementsByClassName('user-text');
    const userPics = document.getElementsByClassName('user-pic');
    
    for (const userPic of userPics) {
      userPic.classList.remove("active-pic");
    }
    for (const userText of userTexts) {
      userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
  }

  // Function to toggle card rotation
  function toggleCardRotation() {
    const card_1_front = document.querySelector("#card_1_front");
    const card_1_back = document.querySelector("#card_1_back");
    const card_2_front = document.querySelector("#card_2_front");
    const card_2_back = document.querySelector("#card_2_back");
    const card_3_front = document.querySelector("#card_3_front");
    const card_3_back = document.querySelector("#card_3_back");
    const card_4_front = document.querySelector("#card_4_front");
    const card_4_back = document.querySelector("#card_4_back");

    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');
    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');
    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
    card_4_front.classList.toggle('rotate-y-180');
    card_4_back.classList.toggle('rotate-x-90');
  }

  useEffect(() => {
    // Attach event listeners when the component mounts
    handleScroll(); // Call handleScroll initially
    window.addEventListener('scroll', handleScroll);
    toggleCardRotation();
    window.addEventListener('click', toggleCardRotation);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Remove other event listeners if necessary
    };
  }, []);

  return (
    <div className='bg-color-primary text-color-white'>
      <title>WanderSub</title>
      <link rel="stylesheet" href="css/main.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <header className="sticky top-0 z-50">
        <nav className="container flex justify-between items-center">
          <div className="py-5 text-color-secondary font-bold text-3xl">
            <a href="#home">
              <span className="text-color-white">Wander</span>Sub.
            </a>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                  free trial
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile screen */}
          <div id="hamburger" className="lg:hidden cursor-pointer z-50" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars" />
          </div>
          <div
            id="menu"
            className="hidden bg-color-primary-dark h-[100vh] absolute inset-0"
          >
            <ul className="h-full grid place-items-center py-20">
              <li>
                <a
                  id="hLink"
                  href="#home"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="hLink"
                  href="#features"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  id="hLink"
                  href="#testimonial"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  id="hLink"
                  href="#pricing"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  id="hLink"
                  href="#blog"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  id="hLink"
                  href="#contact"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="btn">free trial</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="relative">
          <div className="blob1" />
          <div className="blob2" />
          <div className="container py-20">
            <div className="flex flex-col items-center z-20 md:flex-row">
              <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                <h1 className="title mb-4">Awesome App for Your Financial.</h1>
                <p className="leading-relaxed mb-10">
                  This should be used to tell a story and let your users know a
                  little more about app and its use, How can benefit them.
                </p>
                <button className="btn">Download app</button>
              </div>
              <div className="md:w-1/2">
                <img src={logo} alt="hgfc" />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-color-primary-light">
          <div className="container py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
              <h4 className="font-bold text-color-secondary mb-4">Our Future</h4>
              <h1 className="title">Easy To Manage Your All Payments By Our App</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {/* card no 1 */}
              <div id='toggleBtn' className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" onClick={toggleCardRotation}>
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-calendar-days text-4xl" />
                </div>
                <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
                <p className="leading-relaxed">
                  We use an application designed for testing and to keep track.
                </p>
              </div>
              {/* card no 2 */}
              <div id='toggleBtn' className="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" onClick={toggleCardRotation}>
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-chart-column text-4xl" />
                </div>
                <h3 className="text-xl font-bold py-4">Finance Snapshot</h3>
                <p className="leading-relaxed">
                  We use an application designed for testing and to keep track.
                </p>
              </div>
              {/* card no 3 */}
              <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  <i className="fa-solid fa-phone text-4xl" />
                </div>
                <h3 className="text-xl font-bold py-4">Support 24/24</h3>
                <p className="leading-relaxed">
                  We use an application designed for testing and to keep track.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Add more sections here */}
        <section id="pricing" class="bg-color-primary-light">
            <div class="container py-20">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h4 class="font-bold text-color-secondary mb-4">Pricing</h4>
                    <h1 class="title">Get In Reasonable Price</h1>
                    {/* <!-- Rounded switch  --> */}
                    <div class="mt-5 flex items-center justify-center gap-4">
                        <p>Bill Monthly</p>
                        <label class="cursor-pointer relative inline-block w-20 h-8 rounded-full">
                            <input type="checkbox" id="toggleBtn" class="peer opacity-0 w-0 h-0" />
                            <span class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
                        </label>
                        <p>Bill Anually</p>
                    </div>
                </div>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* <!-- card 1 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_1_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    20<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_1_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    120<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    {/* <!-- card 2 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_2_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    50<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Standard</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_2_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    150<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Standard</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                    {/* <!-- card 3 --> */}
                    <div class="card relative h-auto w-auto">
                        {/* <!-- front side  --> */}
                        <div id="card_3_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    100<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Basic</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                        {/* <!-- back side  --> */}
                        <div id="card_3_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
                            <div class="relative">
                                <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
                                    500<span class="text-sm font-normal tracking-widest">/per month</span>
                                </p>
                            </div>
                            <div class="py-10">
                                <h3 class="text-xl font-bold pb-3">Premium</h3>
                                <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
                            </div>
                            <ul class="space-y-4 pb-10">
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Expense Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-secondary"></i>
                                    <span class="pl-4">Card Management</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Instant Statistics</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Bookmark Function</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bookmark text-color-gray"></i>
                                    <span class="pl-4">Accounting System</span>
                                </li>
                            </ul>
                            <button class="card_btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="saving-money" className='card text-color-primary auto '>
        <div className="container py-20 relative">
          <div className="blob1" />
          <div className="blob2" />
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-12 md:w-1/2">
              <img src="./img/hero3.png" alt="" />
            </div>
            <div className="text-center md:text-left md:w-1/2 md:ml-20">
              <h4 className="font-bold text-color-secondary mb-4">Saving Money</h4>
              <h1 className="title mb-4">Best Financing App To Save Your Money</h1>
              <p className="leading-relaxed mb-10">Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control your card easily and send money some one just one click.</p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section id=''>
      <div id='card_4_front' className=" front card  p-4 shadow-md lg:max-w-lg text-color-primary ">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    React Tailwind Card Title
                </h3>
                <p className="text-gray-600">
                    react with tailwind css simple card It is a long established
                    fact that a reader will be distracted.
                </p>
            </div>
        </div>

        <div id='card_4_back' className=" back card  p-10  rotate-x-90 shadow-md lg:max-w-lg text-color-primary ">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    React Tailwind Card Title
                </h3>
                <p className="text-gray-600">
                    react with tailwind css simple card It is a long established
                    fact that a reader will be distracted.
                </p>
            </div>
        </div>
      </section>

      
      </main>
    </div>
    
  );
}

export default Hero2;
