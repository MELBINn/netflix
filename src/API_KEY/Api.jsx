const API_KEY="b5d19adb532f15371ddefac4607c4239"

export const  Action="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"

export const Adventure="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"

export const Animation="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"

export const Comedy="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"

export const Fantacy="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"

export const Horrer="https://api.themoviedb.org/3/discover/movie?api_key=b5d19adb532f15371ddefac4607c4239&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27"

export const trailor=(moiveid)=>`http://api.themoviedb.org/3/movie/${moiveid}/videos?api_key=b5d19adb532f15371ddefac4607c4239`