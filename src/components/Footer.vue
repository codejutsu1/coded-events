<template>
    <footer class="bg-main-500 relative pb-10">
        <div class="bg-footer absolute inset-0"></div>
        <div class="w-4/5 pl-16 mx-auto z-40 relative">
            <div class="pt-20 pb-10">
                <img src="../assets/images/Group 6631 (1).png" alt="Logo">
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col space-y-8">
                    <div class="flex items-center gap-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#CC4516"/>
                        </svg>
                        <p class="text-white font-normal text-base">
                            Address Line 1, <br>
                            City, State name, <br>
                            Country.
                        </p>
                    </div>
                    <div class="flex items-center gap-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#CC4516"/>
                        </svg>
                        <p class="text-white font-normal text-base">contact@codedEvents.com</p>
                    </div>
                    <div class="flex items-center gap-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#CC4516"/>
                        </svg>
                        <p class="text-white font-normal text-base">08373783892929</p>
                    </div>
                    <div class="flex gap-10">
                        <img src="../assets/images/Group 6373.png" alt="instagram">
                        <img src="../assets/images/Group 6374.png" alt="twitter">
                        <img src="../assets/images/Group 6375.png" alt="facebook">
                        <img src="../assets/images/Group 6634.png" alt="whatsapp">
                    </div>

                    <div>
                        <p class="text-white font-normal text-base">&copy;CodedEvents 2021</p>
                    </div>
                </div>
                <div class="flex justify-between w-3/5">
                    <div>
                        <p class="text-main-200 text-base font-bold pb-6">Company</p>
                        <ul class="flex flex-col gap-5 text-white font-normal text-base">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/">Pricing</router-link>
                            </li>
                            <li>
                                <router-link to="/">Create Event</router-link>
                            </li>
                            <li>
                                <router-link to="/">About</router-link>
                            </li>
                            <li>
                                <router-link to="/">Contact</router-link>
                            </li>
                            <li>
                                <router-link to="/">Blog</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-3/5">
                        <p class="text-main-200 text-base font-bold pb-6">Join a Newsletter</p>
                        <div>
                            <form action="#">
                                <label for="email" class="block font-normal text-base text-white">Your email</label>
                                <input type="email" name="email" class="my-4 w-full py-6 px-4 rounded bg-white border border-grey-200 ring-0 outline-0" placeholder="Enter Email">
                                <input type="submit" value="Join" class="block rounded-lg bg-main-200 text-white font-bold text-base py-4 px-20 z-50 relative">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>