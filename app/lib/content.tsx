export const data: {
  name: string;
  phoneNumbers: {
    whatsapp: string;
    phone: string;
  };
  instagram: string;
} = {
  name: 'Ceren Tercan',
  phoneNumbers: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+905555555555',
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+905555555555',
  },
  instagram: `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'username'}`,
};

export const links = [
  {
    name: 'Anasayfa',
    href: '#',
  },
  {
    name: 'Hakkımda',
    href: '#hakkımda',
  },
  {
    name: 'Hizmetlerimiz',
    href: '#hizmetlerimiz',
  },
  {
    name: 'İletişim',
    href: '#iletisim',
  },
];

export const services = [
  {
    title: "Mindfulness Koçluğu",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M2500 5113 c-319 -31 -529 -63 -784 -120 -441 -97 -705 -240 -908 -492 -158 -196 -263 -412 -327 -672 -37 -152 -54 -201 -116 -343 -85 -195 -75 -264 57 -401 43 -45 78 -90 78 -99 0 -9 -20 -56 -45 -105 -88 -175 -208 -367 -340 -541 -84 -110 -102 -142 -111 -199 -14 -89 54 -180 187 -250 102 -54 129 -77 129 -113 0 -18 -21 -71 -47 -122 -33 -65 -46 -104 -47 -135 -1 -40 3 -47 58 -98 54 -50 58 -56 47 -79 -6 -14 -11 -47 -11 -73 0 -61 20 -87 112 -146 l70 -46 -6 -72 c-18 -217 -18 -232 -1 -296 45 -174 148 -269 300 -278 60 -4 96 2 245 42 96 25 262 75 369 110 l194 64 28 -20 c107 -76 236 -296 299 -510 14 -48 31 -82 48 -98 l26 -24 1098 5 1099 4 26 27 c48 47 35 96 -73 267 -122 194 -214 524 -244 873 -12 138 -1 292 32 432 33 146 34 160 4 189 -28 29 -79 34 -108 12 -39 -29 -81 -197 -99 -394 -30 -331 86 -885 242 -1156 21 -38 37 -71 34 -74 -3 -3 -436 -8 -963 -10 l-958 -5 -18 59 c-41 132 -147 327 -239 437 -22 26 -38 50 -35 52 2 3 76 29 164 60 87 30 191 71 231 89 212 101 331 239 336 392 2 65 -27 104 -78 104 -39 0 -85 -34 -85 -61 0 -106 -80 -200 -231 -272 -176 -85 -1053 -374 -1267 -418 -168 -35 -251 97 -208 331 19 103 12 166 -25 226 -24 39 -82 92 -115 104 -29 11 -30 27 -4 60 22 28 26 89 8 111 -10 12 -72 62 -117 96 -2 1 13 36 34 77 90 178 46 314 -132 404 -67 35 -143 88 -143 101 0 5 45 70 101 145 131 176 244 358 330 529 56 112 69 147 69 185 0 72 -39 144 -120 221 -54 52 -70 74 -70 95 0 16 21 76 46 135 60 136 78 190 114 335 73 290 170 482 347 683 114 131 305 246 527 317 273 89 885 186 1160 186 406 -1 792 -141 1177 -427 52 -38 132 -104 177 -146 73 -69 86 -77 121 -77 47 0 81 35 81 82 0 87 -380 380 -693 534 -224 110 -430 170 -666 194 -96 9 -291 11 -371 3z"/>
          <path
            d="M1525 4589 c-248 -83 -430 -235 -569 -475 -64 -111 -102 -206 -141 -361 -29 -109 -33 -137 -24 -163 13 -36 35 -50 82 -50 53 0 71 29 106 167 57 231 140 384 280 523 99 97 188 152 329 201 103 35 129 62 117 119 -15 67 -64 78 -180 39z"/>
          <path
            d="M3240 4551 c-120 -128 -269 -358 -352 -545 -22 -50 -42 -93 -44 -95 -2 -2 -39 20 -83 48 -171 110 -391 207 -577 257 -104 28 -143 24 -165 -18 -25 -47 -42 -192 -46 -417 l-5 -233 -97 2 c-53 2 -138 2 -189 1 -90 -1 -95 -2 -124 -31 -29 -30 -30 -33 -24 -93 13 -113 47 -260 92 -397 218 -657 658 -999 1364 -1060 147 -12 638 -6 760 10 574 74 956 339 1184 821 84 179 148 388 177 586 14 93 7 121 -35 148 -21 14 -56 17 -212 17 l-187 0 6 99 c11 181 -22 500 -57 554 -23 34 -58 38 -149 14 -175 -44 -422 -153 -585 -258 l-76 -50 -56 117 c-97 200 -262 446 -364 540 -64 59 -87 57 -156 -17z m214 -331 c72 -109 138 -231 186 -342 l33 -77 -58 -63 c-94 -102 -173 -215 -225 -323 -26 -55 -51 -111 -55 -125 l-8 -25 -10 25 c-70 172 -160 315 -277 443 -53 58 -53 59 -41 95 44 127 171 357 274 496 l51 69 33 -39 c19 -21 62 -81 97 -134z m-989 -291 c117 -57 281 -162 376 -242 227 -189 379 -523 395 -862 l6 -120 -46 83 c-112 204 -271 386 -429 492 -163 109 -377 199 -550 231 l-66 12 -7 55 c-8 62 1 416 11 449 l7 22 100 -35 c56 -20 147 -58 203 -85z m2043 -116 c3 -111 1 -222 -2 -246 l-7 -45 -67 -12 c-99 -18 -244 -66 -351 -116 -265 -124 -473 -325 -627 -606 l-46 -83 6 112 c16 322 136 613 333 810 151 151 398 300 643 387 86 31 96 32 104 18 6 -10 12 -108 14 -219z m-2457 -449 c538 -75 875 -334 1070 -824 40 -100 109 -349 109 -392 0 -20 -3 -21 -122 -14 -632 36 -1006 258 -1234 732 -53 112 -115 295 -142 422 l-20 92 114 0 c62 0 163 -7 225 -16z m2867 -76 c-28 -132 -90 -314 -147 -432 -186 -382 -470 -597 -906 -685 -96 -19 -309 -41 -403 -41 l-45 0 7 43 c40 250 148 511 292 704 130 174 239 264 436 358 197 94 418 142 659 144 l127 1 -20 -92z"/>
          <path d="M719 3397 c-62 -48 -40 -137 37 -153 44 -9 94 35 94 82 0 65 -81 109 -131 71z"/>
        </g>
      </svg>
    ),
    link: "#mindfulness-koclugu"
  },
  {
    title: "Piskolojik Danışmanlık",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M1982 4708 l3 -413 287 -3 288 -2 2 -249 3 -249 298 249 299 249 399 0 399 0 0 415 0 415 -990 0 -990 0 2 -412z m1818 -3 l0 -245 -346 0 -346 0 -186 -155 -187 -156 -5 153 -5 153 -287 3 -288 2 0 245 0 245 825 0 825 0 0 -245z"/>
          <path d="M2312 4708 l3 -83 80 0 80 0 3 83 3 82 -86 0 -86 0 3 -82z"/>
          <path d="M2642 4708 l3 -83 328 -3 327 -2 0 85 0 85 -330 0 -331 0 3 -82z"/>
          <path d="M3470 4705 l0 -85 80 0 80 0 0 85 0 85 -80 0 -80 0 0 -85z"/>
          <path
            d="M1684 3861 c-154 -44 -280 -164 -336 -319 -16 -45 -22 -90 -25 -207 -7 -218 19 -314 122 -440 45 -55 46 -56 43 -123 l-3 -67 -190 -55 c-204 -59 -242 -78 -300 -141 -72 -80 -80 -110 -83 -331 l-4 -198 -164 0 -164 0 0 -245 0 -245 80 0 80 0 0 -660 0 -660 -370 0 -370 0 0 -85 0 -85 2560 0 2560 0 0 85 0 85 -460 0 c-431 0 -460 1 -460 18 0 9 -14 150 -30 312 -16 162 -30 304 -30 316 0 16 10 23 49 32 97 22 181 71 261 151 83 84 122 148 151 249 18 63 19 105 19 649 l0 583 -164 0 -164 0 -4 103 c-3 89 -7 108 -31 149 -14 25 -47 64 -73 87 l-46 40 40 48 c90 109 112 185 112 398 0 127 -4 172 -19 221 -78 256 -349 407 -603 335 -169 -49 -300 -181 -349 -356 -10 -34 -14 -101 -13 -210 1 -173 14 -235 70 -332 35 -59 142 -156 203 -184 l52 -23 -223 -223 -223 -223 -232 0 -233 0 0 28 c0 40 -52 141 -95 186 -51 52 -105 75 -305 132 l-170 48 0 74 c0 71 1 75 38 117 50 57 88 128 107 200 21 84 21 342 -1 416 -81 271 -349 425 -610 350z m267 -178 c136 -59 199 -179 199 -378 0 -205 -59 -318 -199 -383 -82 -38 -193 -38 -272 1 -74 36 -140 108 -168 180 -18 49 -21 79 -21 202 0 120 3 153 20 198 39 103 130 180 240 203 70 15 130 8 201 -23z m1947 15 c81 -20 163 -95 205 -185 20 -43 22 -64 22 -208 0 -151 -1 -163 -26 -215 -36 -78 -80 -124 -150 -159 -139 -69 -293 -42 -394 71 -67 73 -79 115 -83 277 -4 164 4 210 55 288 82 125 212 171 371 131z m-2083 -963 c55 0 115 4 133 8 l32 9 0 -45 c0 -55 -30 -96 -93 -126 -55 -26 -92 -26 -142 0 -63 32 -95 75 -95 127 l0 45 33 -9 c17 -5 77 -9 132 -9z m2120 -40 c18 -17 25 -35 25 -62 0 -36 -12 -50 -307 -345 l-308 -308 -438 0 c-461 0 -484 2 -501 45 -9 24 -7 64 4 85 19 36 61 40 459 40 l385 0 286 285 c285 283 287 285 329 285 31 0 48 -6 66 -25z m185 -1183 c-21 -87 -89 -157 -176 -181 -24 -7 -166 -11 -381 -11 l-343 0 0 85 0 85 125 0 125 0 0 187 0 188 304 305 c286 287 341 351 348 407 2 10 4 -216 6 -502 2 -343 -1 -535 -8 -563z m-1636 914 c31 -20 66 -72 66 -98 0 -15 -10 -18 -62 -18 -103 -1 -185 -49 -231 -135 -17 -31 -22 -57 -22 -117 l1 -78 -584 0 -584 0 4 178 c5 256 6 258 264 333 93 26 175 49 182 49 7 0 41 -24 76 -54 73 -62 140 -88 224 -87 97 1 173 34 245 109 l38 39 178 -51 c98 -29 190 -60 205 -70z m1974 -613 c-3 -492 -3 -499 -26 -555 -44 -109 -131 -196 -240 -240 -56 -22 -65 -23 -514 -26 l-458 -3 0 85 0 85 383 3 382 3 67 32 c88 41 160 113 201 201 l32 67 3 423 3 422 85 0 85 0 -3 -497z m-1158 -78 l0 -85 -1280 0 -1280 0 0 78 c0 43 3 82 7 85 3 4 579 7 1280 7 l1273 0 0 -85z m-245 -330 l0 -80 -867 -3 -868 -2 0 -80 0 -80 868 -2 867 -3 3 -492 2 -493 -103 0 -102 0 -83 165 -82 165 -710 0 -710 0 -82 -165 -83 -165 -97 0 -98 0 0 495 0 495 125 0 125 0 0 80 0 80 -125 0 -125 0 0 85 0 85 1073 -2 1072 -3 0 -80z m589 -612 c3 -21 17 -157 31 -303 14 -146 27 -277 30 -292 l5 -28 -245 0 -245 0 0 330 0 330 209 0 209 0 6 -37z m330 0 c3 -21 17 -157 31 -303 14 -146 27 -277 30 -292 l5 -28 -85 0 c-74 0 -85 2 -85 18 0 9 -14 150 -30 312 -16 162 -30 303 -30 313 0 15 10 17 79 17 l79 0 6 -37z m-1344 -543 l40 -80 -690 0 -690 0 40 80 40 80 610 0 610 0 40 -80z"/>
        </g>
      </svg>
    ),
    link: "#psikolojik-danismanlik"
  },
  {
    title: "Aile Danışmanlığı",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M3225 5109 c-149 -15 -383 -57 -720 -129 -176 -38 -369 -76 -429 -86 -59 -10 -117 -25 -128 -33 -24 -20 -38 -78 -38 -166 0 -159 52 -295 155 -403 74 -78 144 -123 262 -168 l86 -32 23 -114 c46 -228 124 -449 230 -658 77 -150 162 -262 239 -315 48 -33 66 -40 120 -43 80 -5 141 14 230 74 52 35 70 43 76 32 5 -7 37 -58 73 -113 48 -76 61 -103 53 -112 -13 -12 -1184 -762 -1202 -769 -6 -3 -27 8 -46 23 -20 15 -52 37 -73 48 l-37 20 3 129 3 129 60 14 c93 21 235 95 295 153 183 178 145 502 -99 827 -87 117 -252 281 -381 380 -101 78 -106 83 -123 139 -47 153 -137 272 -239 319 -215 97 -585 27 -861 -164 -88 -61 -217 -192 -277 -280 -61 -90 -117 -216 -148 -329 -23 -89 -26 -114 -26 -297 -1 -133 3 -219 12 -258 21 -92 70 -120 127 -75 26 20 27 24 21 82 -15 148 -18 350 -6 424 17 106 59 226 111 319 60 106 214 260 327 327 232 137 513 185 658 110 93 -47 150 -150 181 -324 25 -142 5 -407 -39 -513 -10 -26 -14 -28 -42 -21 -62 17 -188 10 -238 -13 -70 -32 -141 -103 -173 -174 -24 -54 -27 -70 -23 -147 2 -65 9 -99 26 -134 44 -89 142 -166 235 -183 44 -9 43 -2 22 -195 -33 -292 -75 -500 -146 -713 -116 -348 -297 -589 -496 -659 -69 -24 -173 -22 -199 4 -15 15 -15 20 0 64 8 27 24 92 33 144 25 133 25 570 0 748 -36 253 -113 571 -149 617 -38 48 -128 21 -128 -38 0 -13 11 -62 26 -111 78 -271 114 -502 121 -791 6 -241 -9 -405 -47 -527 -31 -98 -24 -146 28 -201 47 -50 99 -70 192 -75 71 -3 97 0 157 20 l73 24 0 -433 0 -434 25 -24 24 -25 619 0 c595 0 621 1 643 19 23 18 24 27 29 167 l5 147 79 19 c202 47 409 124 616 227 l140 70 0 -300 0 -300 25 -24 24 -25 560 0 560 0 25 23 c26 23 46 88 151 486 82 309 225 931 225 977 0 25 -47 64 -78 64 -51 0 -67 -31 -101 -200 -58 -283 -173 -745 -289 -1165 l-8 -30 -472 -3 -472 -2 0 297 1 298 71 49 c410 283 800 728 1021 1165 109 214 117 255 56 287 -26 13 -36 13 -60 4 -24 -10 -40 -35 -89 -138 -106 -220 -274 -481 -428 -662 l-29 -34 -34 27 c-19 14 -83 73 -143 130 l-109 103 72 89 c83 104 209 289 241 356 29 59 22 94 -23 115 -45 22 -78 7 -112 -53 -54 -92 -163 -249 -235 -338 -71 -88 -248 -275 -261 -275 -20 0 -38 318 -21 362 4 10 288 197 632 417 l625 400 17 -22 c27 -35 144 -276 164 -336 20 -65 16 -231 -12 -454 l-17 -137 23 -25 c30 -32 73 -33 104 -2 18 19 25 42 35 118 36 284 40 430 16 524 -17 63 -108 261 -170 366 l-36 62 27 61 c72 161 6 339 -156 418 -70 34 -187 32 -261 -4 -31 -16 -58 -28 -62 -28 -11 0 -101 164 -92 167 69 24 127 85 145 152 42 159 62 591 36 787 -31 238 -99 404 -215 527 -52 55 -82 77 -155 112 -50 24 -125 51 -166 60 -91 19 -349 27 -475 14z m460 -163 c221 -60 330 -197 391 -491 15 -73 19 -134 19 -320 0 -215 -9 -327 -36 -464 -11 -53 -11 -53 -76 -83 -58 -26 -67 -28 -86 -15 -12 8 -53 73 -90 145 l-68 131 17 57 c19 67 14 132 -14 197 -67 150 -247 216 -395 144 -61 -31 -120 -91 -139 -144 -7 -18 -19 -33 -27 -33 -27 0 -195 88 -238 124 -58 50 -75 55 -157 38 -86 -17 -253 -10 -341 13 -232 61 -368 205 -382 406 l-6 86 94 17 c52 9 229 46 394 81 538 115 686 136 920 131 107 -3 180 -9 220 -20z m-148 -835 c30 -14 48 -31 62 -60 25 -48 26 -79 6 -128 -28 -67 -20 -99 63 -259 42 -82 84 -159 92 -171 20 -28 89 -73 111 -73 26 0 153 -211 136 -226 -17 -16 -409 -265 -411 -262 -2 2 -49 76 -105 165 -133 209 -147 215 -259 112 -103 -94 -191 -121 -248 -77 -153 120 -323 499 -410 916 -4 21 -2 22 68 22 40 0 99 4 131 10 l57 9 63 -43 c34 -24 80 -53 102 -64 68 -34 215 -82 251 -82 43 0 84 37 84 76 0 51 37 111 83 133 51 26 70 26 124 2z m-1457 -601 c221 -221 341 -437 343 -620 1 -162 -90 -254 -308 -310 -43 -11 -86 -20 -95 -20 -10 0 -29 -9 -44 -21 -26 -20 -26 -21 -26 -168 l0 -147 -152 4 c-84 2 -155 6 -157 8 -2 2 4 72 13 156 23 222 22 269 -10 307 -25 30 -54 41 -137 56 -44 7 -109 61 -127 105 -21 50 -9 142 24 184 56 73 135 92 237 56 65 -22 111 -15 146 22 52 56 100 243 110 425 l6 122 51 -42 c28 -23 84 -76 126 -117z m2324 -324 c104 -44 134 -174 58 -256 -23 -25 -1319 -862 -1358 -877 -11 -4 -73 84 -162 229 l-22 36 652 418 c359 230 673 429 697 441 51 26 88 29 135 9z m-1522 -1090 l85 -134 -543 -347 c-558 -357 -561 -359 -552 -415 4 -32 50 -64 80 -57 12 4 122 70 243 147 196 125 221 139 232 124 17 -24 27 -97 20 -156 -7 -55 -71 -183 -102 -204 -47 -31 -246 -68 -550 -102 -138 -16 -233 -80 -291 -197 -25 -51 -29 -71 -29 -140 1 -66 6 -91 29 -142 51 -112 158 -190 275 -200 51 -5 212 7 336 24 l45 6 0 -77 0 -76 -520 0 -520 0 0 431 0 432 66 70 c186 197 330 525 414 940 l11 57 133 0 c86 0 152 -5 191 -15 57 -15 176 -72 174 -84 0 -3 -107 -74 -237 -156 -143 -91 -242 -160 -251 -176 -21 -37 -7 -76 32 -95 24 -11 39 -13 57 -5 14 5 259 160 545 344 286 185 525 336 531 336 6 1 49 -59 96 -133z m200 -510 l21 -139 -24 -19 c-72 -58 -276 -186 -381 -238 -66 -33 -122 -59 -124 -58 -1 2 4 28 12 58 20 76 18 153 -6 235 -12 39 -22 76 -23 83 -1 7 111 84 248 172 l250 160 3 -58 c1 -31 12 -119 24 -196z m518 -156 l135 -130 -95 -92 c-469 -457 -1099 -739 -1752 -784 -80 -6 -106 -4 -142 10 -73 28 -126 105 -126 184 0 56 54 138 111 168 15 7 78 18 140 24 374 34 704 136 1012 313 192 110 375 247 502 376 33 34 64 61 70 61 5 0 71 -59 145 -130z"/>
        </g>
      </svg>
    ),
    link: "#aile-danismanligi"
  },
  {
    title: "Öğrenci Koçluğu ve YKS-LGS Tercih Danışmanlığı",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M600 5069 c-208 -41 -392 -212 -445 -414 -8 -34 -15 -101 -15 -155 0 -119 35 -227 103 -323 225 -314 699 -315 923 -2 124 175 141 410 42 599 -46 86 -165 203 -250 244 -112 55 -244 73 -358 51z m175 -160 c129 -24 239 -108 298 -228 30 -61 32 -72 32 -171 0 -102 -1 -109 -38 -182 -90 -182 -287 -268 -479 -208 -119 37 -200 109 -255 226 -25 53 -28 70 -28 164 0 98 2 110 32 170 57 116 161 199 283 226 71 16 85 16 155 3z"/>
          <path
            d="M1876 5065 c-54 -19 -107 -64 -136 -116 l-25 -44 -3 -545 c-2 -300 0 -559 3 -577 13 -74 93 -123 166 -103 22 6 85 54 174 132 l140 123 475 5 c463 5 476 6 515 27 22 12 54 36 72 55 63 65 63 68 63 488 0 420 0 423 -63 488 -18 19 -50 43 -72 55 -40 22 -46 22 -655 24 -505 2 -622 0 -654 -12z m1237 -157 c46 -24 46 -24 47 -399 l0 -356 -26 -24 -26 -24 -476 -5 c-419 -4 -481 -7 -507 -22 -16 -9 -79 -59 -140 -112 l-110 -96 -3 492 c-2 532 -3 526 51 548 35 14 1164 12 1190 -2z"/>
          <path
            d="M2105 4715 c-33 -32 -34 -83 -2 -113 23 -22 26 -22 421 -22 l397 0 24 25 c40 39 32 96 -16 120 -23 12 -95 15 -414 15 l-386 0 -24 -25z"/>
          <path
            d="M2100 4418 c-25 -28 -26 -78 -1 -109 19 -24 22 -24 230 -27 l211 -3 31 31 c26 26 30 36 25 63 -12 64 -24 67 -262 67 -206 0 -214 -1 -234 -22z"/>
          <path
            d="M4294 5065 c-200 -43 -377 -213 -429 -412 -41 -155 -8 -339 85 -471 266 -379 849 -297 1001 141 24 68 29 99 29 177 0 174 -47 287 -170 410 -141 142 -324 197 -516 155z m191 -156 c127 -23 239 -109 298 -229 30 -60 32 -72 32 -170 0 -97 -2 -110 -32 -172 -93 -197 -312 -286 -516 -208 -111 42 -192 126 -238 250 -17 45 -20 72 -17 146 3 77 9 101 35 155 57 115 161 198 283 225 71 16 85 16 155 3z"/>
          <path
            d="M415 3723 c-136 -42 -238 -156 -264 -298 -6 -33 -43 -483 -82 -1000 -77 -1021 -77 -1007 -27 -1117 53 -114 154 -207 269 -247 32 -12 172 -35 335 -55 153 -20 296 -39 317 -42 l37 -6 0 -433 c0 -481 -2 -468 67 -481 27 -5 37 -1 63 24 l30 30 0 471 c0 273 -4 480 -10 495 -5 14 -18 29 -28 35 -11 6 -176 30 -368 55 -192 25 -365 51 -384 57 -75 26 -140 82 -175 150 -38 73 -38 83 39 1090 66 860 76 970 94 1005 26 51 56 78 116 105 81 35 193 12 253 -53 11 -12 119 -183 238 -378 119 -195 225 -364 236 -374 12 -13 31 -19 51 -19 18 1 208 72 423 158 379 153 392 157 451 153 74 -5 130 -37 171 -99 35 -53 43 -140 19 -204 -33 -86 -50 -95 -597 -313 -277 -111 -523 -205 -546 -210 -79 -18 -172 16 -221 79 -11 13 -77 119 -147 234 -70 116 -136 218 -147 228 -29 25 -80 22 -106 -6 -40 -43 -31 -68 113 -302 l134 -220 1 -193 c0 -222 7 -253 62 -270 18 -6 182 -27 363 -48 229 -25 347 -43 384 -57 74 -27 141 -95 170 -170 21 -57 21 -67 21 -728 l0 -671 30 -30 c26 -25 36 -29 63 -24 18 3 40 16 50 28 17 20 17 62 15 727 l-3 706 -28 60 c-63 134 -166 226 -296 265 -37 11 -194 34 -361 53 l-295 33 -3 83 c-3 75 -1 83 14 77 51 -20 113 -28 172 -23 57 4 142 35 590 215 288 116 542 222 566 236 123 72 197 231 176 378 -18 126 -104 243 -218 296 -51 24 -69 27 -162 27 l-105 0 -353 -143 c-193 -78 -356 -142 -361 -142 -4 0 -98 147 -207 327 -211 347 -259 410 -346 451 -95 44 -202 53 -293 25z"/>
          <path
            d="M4485 3676 c-170 -41 -216 -92 -483 -534 -118 -193 -217 -352 -221 -352 -3 0 -191 -26 -417 -59 -463 -66 -486 -72 -574 -161 -101 -100 -136 -246 -96 -392 l8 -28 -487 0 -487 0 -29 -29 c-16 -16 -29 -37 -29 -46 0 -24 27 -72 45 -79 9 -3 176 -6 371 -6 l354 0 0 -949 c0 -889 1 -950 18 -970 9 -11 31 -24 49 -27 27 -5 37 -1 63 24 l30 30 0 946 0 946 114 0 c96 0 120 -3 148 -20 57 -33 119 -50 187 -51 57 -1 292 29 932 121 75 11 148 24 163 30 15 5 29 10 32 10 3 0 4 -37 2 -82 l-3 -82 -285 -33 c-157 -17 -308 -37 -337 -43 -136 -29 -254 -124 -320 -256 l-38 -78 -3 -706 c-2 -666 -2 -708 15 -728 10 -12 32 -25 50 -28 27 -5 37 -1 63 24 l30 30 0 671 c0 661 0 671 21 728 29 75 97 143 170 170 37 14 157 32 384 57 182 20 345 42 363 48 55 17 62 48 62 270 l1 193 134 220 c97 158 135 228 135 250 0 62 -81 98 -128 58 -11 -10 -79 -116 -152 -235 -72 -119 -145 -230 -162 -247 -60 -58 -20 -50 -728 -152 -190 -27 -367 -49 -393 -49 -84 0 -164 50 -198 125 -24 52 -24 138 0 191 21 45 80 99 126 114 16 5 210 34 430 65 285 40 413 61 445 76 44 20 52 31 265 382 121 199 237 381 258 403 110 121 308 119 420 -5 44 -49 65 -97 72 -165 3 -28 23 -442 45 -921 29 -648 37 -881 29 -915 -22 -96 -99 -184 -188 -215 -25 -9 -199 -34 -386 -55 -187 -22 -350 -45 -362 -51 -12 -7 -27 -26 -32 -43 -5 -17 -12 -242 -15 -499 l-6 -469 30 -30 c26 -25 36 -29 63 -24 56 11 63 29 70 188 4 78 7 277 7 441 0 193 4 297 10 297 6 0 145 16 311 35 194 23 320 42 357 55 155 55 275 195 303 357 8 46 1 265 -30 959 -23 494 -45 923 -51 951 -15 84 -58 162 -124 229 -114 113 -268 157 -421 120z"/>
        </g>
      </svg>
    ),
    link: "#ogrenci-koclugu-ve-yks-lgs-tercih-danismanligi"
  },
  {
    title: "Nefes ve Beden Farkındalığı",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M2550 5071 c-261 -55 -463 -214 -573 -448 -29 -64 -43 -79 -165 -182 -73 -62 -138 -123 -144 -136 -19 -42 -2 -73 69 -123 37 -26 77 -56 90 -67 l24 -20 -35 -122 c-40 -137 -62 -274 -52 -324 10 -53 41 -96 88 -121 38 -19 64 -23 210 -28 158 -6 168 -7 206 -33 29 -19 50 -45 74 -94 31 -64 33 -74 32 -168 -1 -162 -57 -291 -171 -395 -98 -90 -176 -118 -359 -130 -161 -11 -271 -38 -389 -95 -251 -121 -437 -345 -517 -620 l-23 -80 -3 -904 -3 -904 22 -24 c35 -36 105 -28 125 14 5 10 11 421 14 913 l5 895 24 70 c76 226 217 393 416 491 116 57 181 73 341 84 160 11 206 21 312 72 182 86 314 270 358 496 18 93 17 149 -1 237 -22 102 -66 185 -130 243 -75 69 -120 83 -290 88 -175 6 -185 8 -185 37 0 44 40 211 76 321 24 73 35 122 31 138 -4 15 -32 43 -77 74 -38 27 -70 52 -70 56 0 4 45 44 99 90 84 70 103 91 122 138 46 110 109 199 191 268 68 57 197 118 290 137 97 19 252 19 343 0 154 -33 300 -134 363 -253 60 -113 110 -359 97 -481 -15 -139 -41 -193 -180 -376 -98 -130 -130 -191 -170 -330 -140 -486 -8 -838 350 -930 33 -9 123 -20 200 -25 77 -5 167 -17 200 -26 293 -79 527 -334 581 -634 10 -59 13 -259 14 -928 l0 -853 25 -24 c32 -33 78 -33 111 0 l25 25 -4 892 c-3 889 -3 893 -25 978 -85 317 -319 574 -619 676 -111 38 -199 54 -293 54 -308 1 -460 147 -460 444 0 109 22 233 64 355 34 102 61 146 175 294 174 225 207 421 125 757 -62 257 -205 424 -432 507 -151 55 -357 69 -522 34z"/>
          <path
            d="M703 4637 c-162 -162 -161 -151 -12 -303 61 -62 124 -118 140 -125 53 -21 109 21 109 82 0 11 -19 40 -41 64 l-42 45 277 0 278 0 30 30 c25 26 29 36 24 63 -13 66 -17 67 -329 67 l-281 0 31 33 c59 62 68 103 28 142 -16 16 -35 25 -57 25 -28 0 -48 -16 -155 -123z"/>
          <path
            d="M2173 4338 c-49 -53 -12 -138 60 -138 41 0 128 -25 181 -52 59 -30 139 -111 169 -170 53 -105 58 -147 67 -528 8 -357 4 -1639 -6 -1738 l-6 -53 -55 -24 c-31 -14 -57 -25 -58 -25 -1 0 -5 82 -9 182 -11 300 -15 338 -43 366 -24 24 -28 25 -131 19 -263 -14 -506 -143 -646 -341 -92 -129 -159 -300 -199 -504 -19 -104 -22 -148 -22 -397 0 -490 15 -517 242 -444 408 130 676 420 768 827 13 57 26 106 28 108 8 8 209 94 220 94 7 0 64 -22 127 -49 l114 -49 27 -109 c86 -349 278 -597 584 -750 84 -43 237 -94 300 -100 47 -5 56 -3 78 19 34 34 52 194 52 463 -1 291 -36 498 -116 690 -137 330 -406 523 -754 542 -97 5 -102 5 -130 -19 -27 -24 -29 -31 -36 -134 -4 -60 -8 -180 -8 -266 -1 -87 -3 -158 -6 -158 -2 0 -39 15 -81 34 l-76 33 1 439 c1 242 4 538 7 659 8 317 -11 1031 -30 1120 -19 84 -81 214 -131 273 -87 100 -260 188 -395 199 -59 5 -67 3 -87 -19z m182 -2510 c4 -106 5 -215 3 -242 l-3 -50 -174 -75 c-188 -82 -220 -106 -207 -155 9 -37 41 -66 74 -66 15 0 83 25 151 55 68 30 126 53 128 52 2 -2 -6 -33 -17 -69 -62 -201 -169 -355 -329 -476 -111 -83 -317 -180 -339 -158 -4 4 -7 132 -7 284 0 247 2 289 22 388 36 173 79 288 150 397 98 153 243 251 430 291 122 26 110 44 118 -176z m955 160 c299 -91 471 -337 532 -763 14 -97 17 -485 5 -547 -5 -22 -14 -38 -21 -38 -8 0 -46 13 -85 29 -234 95 -426 274 -521 486 -31 68 -65 174 -58 180 2 2 55 -19 118 -46 62 -27 124 -49 136 -49 12 0 33 9 48 21 32 25 37 86 9 112 -10 8 -90 47 -178 85 l-160 69 -3 174 c-2 96 0 207 3 247 l7 74 51 -7 c29 -4 81 -16 117 -27z"/>
          <path
            d="M1135 4205 c-38 -37 -33 -77 16 -130 l42 -45 -282 0 -282 0 -24 -25 c-27 -26 -31 -51 -14 -88 20 -44 44 -47 331 -47 l271 0 -42 -45 c-47 -51 -53 -88 -21 -123 24 -26 62 -37 84 -25 8 4 69 61 135 127 159 155 159 142 -2 303 -107 107 -127 123 -155 123 -22 0 -41 -9 -57 -25z"/>
        </g>
      </svg>
    ),
    link: "#nefes-ve-beden-farkindaligi"
  },
  {
    title: "Mindfulness Temelli Nefes ve Yoga Dersleri",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M2524 4741 c-65 -28 -84 -113 -35 -162 91 -91 230 36 144 131 -30 32 -75 45 -109 31z"/>
          <path
            d="M2752 4608 c-21 -21 -13 -38 47 -93 123 -115 182 -302 148 -475 -22 -111 -60 -184 -137 -261 -85 -86 -151 -113 -260 -107 -96 6 -158 35 -231 108 -189 188 -185 535 7 727 56 56 62 71 42 91 -21 21 -37 13 -97 -47 -65 -65 -121 -166 -146 -266 -19 -76 -19 -214 0 -290 33 -125 115 -259 190 -308 35 -22 35 -22 35 -98 0 -148 -68 -225 -225 -254 -102 -18 -128 -26 -195 -60 -128 -64 -235 -178 -286 -305 -15 -38 -52 -197 -90 -390 -35 -179 -71 -343 -79 -365 -18 -50 -53 -83 -265 -257 -200 -164 -299 -266 -454 -465 -65 -84 -123 -156 -129 -160 -7 -5 -106 -10 -220 -13 -205 -5 -209 -5 -228 -29 -10 -13 -19 -37 -19 -54 0 -47 97 -138 179 -167 33 -13 61 -26 61 -30 0 -4 -9 -15 -19 -24 -69 -63 -89 -242 -38 -348 65 -134 289 -276 546 -346 92 -25 107 -26 346 -26 412 1 800 56 1243 176 81 22 83 22 145 5 426 -120 850 -180 1262 -181 239 0 254 1 346 26 255 69 480 212 545 344 35 72 42 177 17 248 -22 60 -45 78 -69 54 -16 -16 -16 -21 1 -74 53 -170 -40 -301 -307 -429 -132 -64 -263 -95 -423 -102 -335 -14 -938 62 -1265 159 l-44 14 89 27 c113 34 198 44 455 53 132 4 216 11 237 19 35 15 49 48 39 90 l-6 25 204 0 c197 0 205 1 211 20 15 47 1 50 -276 50 l-258 0 -143 87 c-96 58 -153 86 -173 86 -19 0 -80 -29 -170 -82 -166 -98 -167 -98 -163 -125 5 -38 41 -27 183 55 77 44 143 81 147 82 8 3 377 -216 378 -224 0 -3 -93 -9 -207 -13 -302 -10 -356 -18 -560 -82 -454 -141 -790 -206 -1223 -235 -242 -16 -428 -8 -552 24 -213 56 -432 190 -491 302 -16 30 -22 58 -22 115 0 64 4 82 29 128 16 28 44 63 61 77 29 22 39 24 102 18 56 -4 78 -2 114 14 36 16 530 410 837 667 79 66 153 152 200 233 17 29 77 166 133 305 55 139 104 257 107 262 14 24 78 -218 92 -349 13 -112 2 -248 -27 -365 -16 -66 -137 -391 -168 -449 -32 -63 -63 -69 -400 -77 -350 -8 -379 -11 -383 -41 -2 -13 4 -25 15 -31 18 -9 597 3 679 13 50 7 112 46 141 88 29 43 157 376 183 476 32 125 43 267 30 390 -12 119 -29 192 -86 364 -39 120 -58 147 -86 124 -8 -7 -68 -145 -132 -307 -65 -162 -132 -320 -148 -350 -42 -75 -116 -166 -174 -216 -222 -186 -823 -668 -843 -676 -39 -15 -250 6 -305 30 -44 20 -126 87 -126 103 0 5 87 9 193 9 168 0 197 2 227 19 22 11 78 74 155 172 160 207 255 303 477 486 197 162 232 197 255 251 8 19 45 189 84 380 45 227 78 365 95 401 36 80 99 156 169 206 82 59 140 82 249 101 105 18 150 39 201 91 56 57 77 108 83 191 l5 73 31 -8 c40 -10 194 -10 222 0 20 7 22 4 26 -65 6 -85 30 -139 85 -193 52 -50 98 -72 179 -85 147 -23 245 -70 336 -162 100 -102 117 -151 197 -548 38 -190 73 -354 77 -365 22 -58 72 -110 257 -263 226 -188 337 -302 495 -507 71 -93 119 -146 142 -157 30 -15 64 -18 228 -18 105 0 192 -4 192 -8 0 -4 -17 -24 -37 -44 -58 -57 -117 -77 -252 -90 -101 -9 -123 -9 -149 5 -17 8 -222 171 -456 362 -436 355 -486 403 -554 525 -16 30 -83 188 -148 350 -64 162 -124 300 -132 307 -30 25 -47 -3 -95 -154 -61 -194 -64 -210 -77 -333 -12 -123 -1 -269 29 -388 27 -104 156 -438 187 -483 13 -19 43 -46 67 -59 46 -26 93 -29 708 -45 l256 -7 79 -64 c114 -93 138 -100 287 -86 160 14 222 37 299 111 64 63 74 99 39 142 -19 24 -23 24 -228 29 -114 3 -213 9 -220 13 -7 4 -65 76 -130 160 -153 199 -256 304 -493 500 -107 89 -203 177 -214 195 -11 21 -45 165 -87 376 -40 201 -78 369 -93 407 -51 126 -158 240 -286 304 -67 34 -93 42 -195 60 -106 20 -160 54 -197 124 -23 44 -28 66 -28 125 0 68 2 74 26 87 47 25 136 132 171 205 109 229 65 504 -108 677 -68 68 -85 77 -107 55z m498 -2331 c107 -271 144 -346 206 -424 60 -77 72 -87 402 -355 155 -127 281 -232 279 -234 -2 -2 -178 1 -392 7 -435 12 -457 16 -490 80 -31 58 -152 383 -169 449 -46 188 -40 385 19 591 19 67 35 123 35 127 0 24 30 -43 110 -241z"/>
          <path
            d="M2489 4381 c-39 -40 -40 -89 -1 -132 24 -26 36 -32 72 -32 36 0 48 6 72 32 39 43 38 92 -1 132 -23 23 -38 29 -71 29 -33 0 -48 -6 -71 -29z"/>
          <path
            d="M1457 3553 c-16 -16 -3 -40 61 -111 37 -41 81 -91 97 -110 25 -28 35 -33 53 -27 39 12 22 47 -72 154 -85 96 -117 117 -139 94z"/>
          <path
            d="M3525 3460 c-95 -108 -112 -143 -73 -155 18 -6 28 -1 53 27 16 19 61 69 98 111 72 80 82 110 37 115 -21 2 -41 -14 -115 -98z"/>
          <path
            d="M2489 3491 c-40 -40 -40 -89 0 -133 24 -27 36 -33 71 -33 35 0 47 6 72 34 26 29 30 39 25 75 -12 84 -108 117 -168 57z"/>
          <path d="M2511 2646 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z"/>
          <path
            d="M1170 2629 c-96 -9 -126 -23 -114 -54 9 -23 29 -24 156 -14 167 13 170 14 166 47 -3 26 -6 27 -58 28 -30 1 -98 -2 -150 -7z"/>
          <path
            d="M3747 2633 c-4 -3 -7 -17 -7 -29 0 -16 7 -25 23 -29 41 -9 268 -24 282 -19 20 8 25 30 12 48 -16 21 -292 47 -310 29z"/>
          <path
            d="M2489 1951 c-40 -40 -40 -89 0 -133 24 -27 36 -33 71 -33 35 0 47 6 72 34 26 29 30 39 25 75 -12 84 -108 117 -168 57z"/>
          <path
            d="M2533 1373 c-35 -7 -73 -59 -73 -100 0 -25 8 -43 29 -64 91 -90 231 37 144 130 -29 30 -61 41 -100 34z"/>
          <path
            d="M2001 978 c-68 -36 -94 -64 -81 -88 14 -26 24 -25 84 9 l51 28 90 -51 90 -51 -506 -3 c-543 -2 -540 -2 -524 -52 6 -20 11 -20 565 -20 l560 0 15 24 c27 41 5 64 -132 144 -69 39 -135 74 -147 77 -11 3 -41 -5 -65 -17z"/>
          <path
            d="M2489 841 c-40 -40 -40 -89 0 -133 24 -27 36 -33 71 -33 35 0 47 6 71 33 40 44 40 93 0 133 -41 41 -101 41 -142 0z"/>
        </g>
      </svg>
    ),
    link: "#mindfulness-temelli-nefes-ve-yoga-dersleri"
  },
  {
    title: "Somatik Dans",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="74.000000pt" height="74.000000pt"
           viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M2735 5110 c-85 -17 -156 -55 -640 -346 -340 -203 -515 -314 -547 -345 -74 -74 -118 -179 -118 -286 l0 -52 -367 -3 c-367 -3 -368 -3 -410 -27 -138 -79 -134 -279 7 -348 40 -20 89 -26 440 -53 217 -17 397 -34 401 -38 5 -5 75 -459 82 -533 1 -8 -183 -216 -410 -462 -482 -523 -468 -503 -468 -674 l0 -112 321 -643 322 -643 -39 -230 c-21 -127 -39 -238 -39 -248 0 -10 12 -29 26 -44 24 -24 28 -25 132 -22 95 4 112 7 155 32 72 43 93 84 159 315 90 314 102 246 -165 955 -119 317 -217 583 -216 590 0 6 119 116 265 242 369 321 354 306 354 343 0 42 -31 72 -74 72 -30 0 -71 -33 -367 -292 -198 -174 -337 -303 -343 -319 -7 -21 21 -104 163 -483 94 -251 172 -462 174 -468 2 -10 -156 -106 -176 -108 -4 0 -120 225 -257 500 -247 494 -250 501 -250 563 0 38 7 77 19 102 11 25 178 214 428 485 l411 445 218 72 218 73 54 -33 c66 -40 168 -146 210 -218 17 -30 40 -83 52 -119 20 -60 81 -141 723 -956 386 -490 723 -918 749 -951 l47 -59 -72 -62 -72 -62 -825 825 c-793 793 -827 825 -862 825 -41 0 -78 -35 -78 -74 0 -29 2159 -2191 2215 -2217 166 -78 346 109 262 272 -12 24 -451 588 -975 1252 -824 1045 -956 1217 -976 1271 -55 153 -169 298 -307 392 l-69 48 0 250 0 251 102 29 c91 26 108 35 149 76 25 25 51 62 58 82 l12 35 42 -14 c56 -19 180 -18 237 2 108 38 192 114 238 213 30 67 41 186 23 258 -7 25 -10 48 -8 51 10 9 119 -103 146 -150 44 -79 61 -148 71 -302 13 -196 56 -352 131 -479 l21 -36 -100 0 c-121 0 -131 -6 -162 -105 -12 -38 -26 -74 -31 -79 -11 -13 -153 133 -202 206 -21 32 -54 89 -74 127 -24 48 -44 73 -62 81 -50 20 -101 -15 -101 -70 0 -32 77 -174 141 -260 101 -136 282 -290 341 -290 43 0 63 29 99 139 l33 101 147 0 c125 0 150 3 168 18 37 29 30 72 -23 143 -58 77 -118 200 -146 299 -13 46 -24 131 -30 218 -11 170 -28 241 -82 345 -100 193 -301 313 -559 336 -124 11 -201 1 -276 -36 -68 -34 -145 -110 -178 -177 -28 -57 -49 -155 -43 -198 l5 -28 -168 0 -168 0 -21 27 c-18 23 -20 38 -18 101 l3 75 330 200 c182 109 364 215 405 235 l75 37 532 3 532 3 17 -26 c15 -23 15 -27 0 -50 -9 -14 -22 -25 -28 -25 -82 0 -388 -35 -405 -46 -43 -27 -42 -91 3 -120 21 -15 41 -15 221 0 109 10 213 22 232 28 55 17 109 73 126 131 23 78 6 145 -52 199 -61 59 -54 58 -625 57 -288 -1 -541 -5 -563 -9z m72 -552 c48 -22 99 -76 119 -124 8 -19 14 -61 14 -94 0 -140 -102 -242 -241 -242 -111 0 -203 70 -234 177 -42 142 42 271 200 308 32 8 97 -3 142 -25z m-1027 -205 c1 -54 30 -112 79 -156 26 -24 37 -39 29 -42 -108 -40 -231 -75 -265 -75 l-43 0 0 43 c0 100 42 177 130 236 60 40 70 39 70 -6z m569 -238 c34 -17 56 -65 47 -101 -15 -57 -36 -66 -361 -154 -170 -46 -332 -87 -360 -92 -34 -5 -197 4 -500 27 -384 30 -452 38 -462 52 -17 23 -16 43 4 65 15 17 44 18 492 18 l476 0 295 99 c162 55 305 100 318 100 13 1 36 -6 51 -14z m-279 -633 l0 -227 -170 -57 c-167 -55 -170 -56 -175 -35 -7 33 -65 425 -65 441 0 9 18 15 53 20 28 3 115 24 192 45 77 22 146 40 153 40 9 1 12 -51 12 -227z m-447 -2729 c39 -110 36 -153 -23 -358 -59 -206 -65 -219 -97 -234 -32 -15 -63 -14 -63 2 0 6 14 101 32 210 l32 197 -42 85 c-30 61 -38 86 -29 92 34 23 143 82 152 82 6 1 23 -34 38 -76z m2627 -313 c93 -118 170 -224 170 -234 0 -26 -29 -56 -54 -56 -14 0 -89 68 -222 201 l-202 202 61 53 c34 30 65 53 70 51 4 -1 84 -99 177 -217z"/>
        </g>
      </svg>
    ),
    link: "#somatik-dans"
  }
];

export const servicesContent = [
  {
    link: "mindfulness-koclugu",
    title: "Mindfulness Koçluğu",
    description: "Bireyin kendisiyle açık, yargısız ve arkadaşça ilişki kurmasına yardımcı olarak öncelikle kişinin kendisiyle olan ilişkisini güçlendirir.Bireylerin beden ve zihinlerinde neler olup bittiğini anlamalarına ve kabullenmelerine yardımcı olurken yaşamlarında tekrarlayan zorlayıcı deneyimlerin olumlu anlamda dönüşümüne de destek sağlar. Temel hedef; bireylerin şimdiki anı daha bilinçli bir şekilde deneyimleyerek kendileriyle sağlam bir bağ kurmalarını ve gerçek ihtiyaçlarını daha net bir şekilde görerek eylemde bulunmalarını sağlamaktır.",
    image: "/services/mindfulness_koclugu.jpeg"
  },
  {
    link: "psikolojik-danismanlik",
    title: "Psikolojik Danışmanlık",
    description: "Bireylerin duygusal, zihinsel ve davranışsal sorunlarını anlayıp çözmelerine yardımcı olan profesyonel bir destek sürecidir. Bu süreçte danışman, bireylere stres,  depresyon, anksiyete, ilişki problemleri gibi çeşitli konularda destek sağlar.  Bireyin ihtiyaçlarını ve hedeflerini ortaya çıkaracak teknikler kullanarak danışanların sorunlarına çözüm bulmalarını sağlar ve yaşam kalitelerini artırmalarına katkıda bulunur.",
    image: "/services/psikolojik_danismanlik.jpg"
  },
  {
    link: "aile-danismanligi",
    title: "Aile Danışmanlığı",
    description: "<b>Aile Danışmanlığı</b>\n" +
      "Aile danışmanlığı; aile üyelerinin ilişkilerini anlamlandırmalarını, iletişimlerini geliştirmelerini ve aile sorunlarına karşı yapıcı bakış açıları kazanmalarını sağlayan deneyimsel bir terapi yöntemidir. Aile üyeleriyle beraber ya da bireysel olarak çalışılarak aile içindeki yapının anlaşılması ve aile dinamiklerinin sağlıklı bir temele kavuşması hususunda destekleyici bir araçtır. Evli çiftlere yönelik bir terapi yöntemi olarak görülse de duygusal ilişki içerisinde olan tüm çiftler için etkileyici bir yöntemdir. \n" +
      "\"Aile danışmanlığı,aile üyelerine çözüm odaklı yaklaşımlar sunarak ilişkileri güçlendirmeyi hedefler.\"\n",
    image: "/services/aile_danismanligi.jpg"
  },
  {
    link: "ogrenci-koclugu-ve-yks-lgs-tercih-danismanligi",
    title: "Öğrenci Koçluğu ve YKS-LGS Tercih Danışmanlığı",
    description: "<b>ÖĞRENCİ KOÇLUĞU</b>\n" +
      "Öğrenci koçluğu, öğrencilerin okul hayatını rahatlıkla yönetebilmelerini ve kendilerine has bir disiplin anlayışı benimseyerek eğitim süreçlerini sağlıklı geçirebilmeleri için öğrencilere profesyonel destek sunar. Öğrencilere zaman yönetimi, motivasyon, sınav kaygısı, çalışma teknikleri ve kariyer planlaması konusunda rehberlik eder. Özellikle sınav grubu öğrencilerinin sınav kaygısını ve sürecini anlama, yönetme becerilerini geliştirir. Sınav stresiyle başa çıkma stratejileri sunarak sınava rahat bir süreç içinde hazırlanmalarına yardımcı olur. \n" +
      "\n<b>YKS-LGS (Üniversite-Lise) TERCİH DANIŞMANLIĞI</b>\n" +
      "Gençlerin geleceklerini şekillendirirken doğru tercihleri yapmalarına yardımcı olmak için özel olarak tasarlanmıştır. Doğru tercih yapmak, sınavdan iyi bir puan almak kadar önemlidir. İyi bir tercih sıralaması, kişinin yaşamak istediği en yüksek hayalini gerçekleştirmesi için alan açar.. Kişisel yetenekler, ilgi alanları ve hedefler göz önünde bulundurularak tercih süreci yürütülür.\n",
    image: "/services/ogrenci_koclugu_ve_yks_lgs_tercih_danismanligi.jpeg"
  },
  {
    link: "nefes-ve-beden-farkindaligi",
    title: "Nefes ve Beden Farkındalığı",
    description: "Nefes, sinir sistemini olumlu etkilemenin en kısa yoludur. Nasıl nefes aldığın tüm yaşam kaliteni ve bedensel sağlığını doğrudan etkiler. Nefese yapılan yöntemsel bir değişiklik yaşam kalitesini ve sağlığını hızlı bir şekilde iyileştirir. Kişiye özel yapılan her seansta, beden doğal denge düzeyine kavuşur.",
    image: "/services/nefes_ve_beden_farkindaligi.jpeg"
  },
  {
    link: "mindfulness-temelli-nefes-ve-yoga-dersleri",
    title: "Mindfulness Temelli Nefes ve Yoga Dersleri",
    description: "Mindfulness temelli nefes ve yoga dersleri, içsel duyulara odaklanarak bedeni ve sinir sistemini dengeye getirir. Bu derslerde, nefesin yardımıyla bedensel ve zihinsel süreçlerin içersinde yoga pozları deneyimlenirken bedeni resetleyerek yeniden yapılandırma sürecine girilir. Her ders, zihni sakinleştirmeye yönelik başlar ve beden-nefes farkındalığı üzerine odaklanır. Bedeninizi güçlendirip esnetirken, nefesinizi yönlendirirken bedensel farkındalığı derinleştirir. Nefes-beden-zihin bağlantısı sağlıklı işleyişine kavuşur.",
    image: "/services/mindfulness_temelli_nefes_ve_yoga_dersleri.jpg"
  },
  {
    link: "somatik-dans",
    title: "Somatik Dans",
    description: "Bedeninizi keşfetmenin, duygusal ifadenizi serbest bırakmanın ve içsel özgürlüğü hissetmenin keyifli bir yoludur. Bu seanslarda, bedeninizi ritimle buluşturarak duygularınızı dansın diliyle ifade eder ve içsel alanınızla yeniden bağlantı kurarsınız. Bedeninizin ritmiyle uyumlu olarak dans ederken içsel dünyanızı yakından tanıma ve güzelleştirme şansını yakalarsınız. .Bedeninizi keşfederken kendinizi daha güçlü, daha canlı ve daha özgür hissetmenize ve kendinizi tanımanıza alan açar.",
    image: "/services/somatik_dans.jpg"
  }
];

export const sss = [
  {
    title: "Danışmanlık sistemi nasıl işler?",
    desc: "Danışmanlık hizmeti, bireylerin yaşadıkları sorunlar karşısında duygusal destek sağlar. Danışmanlar, bireylerin yaşadıkları sorunları dinler, anlar ve çözüm yolları bulmalarına rehberlik eder. Danışmanlık hizmeti, kişisel gelişim ve iyileşme yolculuğunda önemli bir destek ve rehberlik kaynağıdır."
  },
  {
    title: "Grup atölyeleri sistemi nasıl işler?",
    desc: "Zaman zaman tüm bu süreçleri kapsayan doğayla ve kendimizle bağlantımızı artıracak  yarım günlük iyileştirici grup atölyeleri yapılmaktadır."
  },
  {
    title: "Kimler danışmanlık alabilir?",
    desc: "Danışmanlığa herkes başvurabilir. Bireyler, çiftler, aileler ve gençler, yaşadıkları zorluklarla başa çıkmak, ilişkilerini güçlendirmek veya kişisel gelişim sağlamak amacıyla danışmanlık alabilirler. Günlük yaşam becerilerine katılım ve performansı etkileyen durumlarda da iyilik halinin korunması için danışmanlık hizmeti önemlidir."
  },
  {
    title: "Danışmanlık seansları ne kadar sürer?",
    desc: "Danışmanlık sürecine başlamadan önce 15 dakikalık ÜCRETSİZ ön görüşme yapılarak hangi danışmanlık türüne  ihtiyacınız olduğu belirlenir. Bireysel seanslar 60 dakika civarında sürer."
  },
  {
    title: "Danışmanlık gizli midir?",
    desc: "Evet, danışmanlık seansları gizli ve güvenlidir. Danışmanlık etiği ve yasalarına göre, danışmanlar danışan gizliliğine büyük önem verir ve paylaşılan bilgileri gizli tutarlar."
  },
  {
    title: "Danışmanlık yöntemleri nelerdir?",
    desc: "Bireylerin ihtiyaçları doğrultusunda bireye özgü bütüncül yaklaşımlar ile danışmanlık yöntemi ve planlaması oluşturulmaktadır."
  },
  {
    title: "Danışmanlık ücretleri nedir?",
    desc: "Danışmanlık ücretleri, danışmanın deneyimine, konumuna ve hizmetin türüne bağlı olarak değişebilir. Detaylı bilgi ve ücretlendirme için lütfen bizimle iletişime geçiniz."
  },
  {
    title: "Hangi konularda danışmanlık alabilirim?",
    desc: "Aile, ilişkiler, sınav kaygısı, stres yönetimi, kişisel gelişim, kariyer planlaması ve İhtiyaçlarınıza uygun olarak farklı konularda danışmanlık alabilirsiniz."
  },
]
