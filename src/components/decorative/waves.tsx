import { motion } from 'framer-motion';

export const DecorationWaves = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1422 800"
    style={{
      WebkitUserSelect: 'auto',
      width: '100%',
      minHeight: '500px',
      marginTop: '20vh',
      opacity: 0.1,
      zIndex: 3,
    }}
    {...props}
  >
    <motion.defs
      style={{
        WebkitUserSelect: 'auto',
      }}
    >
      <motion.linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="a"
        style={{
          WebkitUserSelect: 'auto',
        }}
      >
        <motion.stop
          stopColor="hsl(0, 0%, 27%)"
          offset="0%"
          style={{
            WebkitUserSelect: 'auto',
          }}
        />
        <motion.stop
          stopColor="hsl(0, 0%, 100%)"
          offset="100%"
          style={{
            WebkitUserSelect: 'auto',
          }}
        />
      </motion.linearGradient>
    </motion.defs>
    <motion.g
      strokeWidth={1.5}
      stroke="url(#a)"
      fill="none"
      strokeLinecap="round"
      style={{
        WebkitUserSelect: 'auto',
      }}
    >
      <motion.path
        d="M0 468q355.5-268 711-68t711 68"
        opacity={0.05}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 459q355.5-259 711-59t711 59"
        opacity={0.07}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 450q355.5-250 711-50t711 50"
        opacity={0.09}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 441q355.5-241 711-41t711 41"
        opacity={0.11}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 432q355.5-232 711-32t711 32"
        opacity={0.12}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 423q355.5-223 711-23t711 23"
        opacity={0.14}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 414q355.5-214 711-14t711 14"
        opacity={0.16}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 405q355.5-205 711-5t711 5"
        opacity={0.18}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 396q355.5-196 711 4t711-4"
        opacity={0.2}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 387q355.5-187 711 13t711-13"
        opacity={0.22}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 378q355.5-178 711 22t711-22"
        opacity={0.24}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 369q355.5-169 711 31t711-31"
        opacity={0.25}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 360q355.5-160 711 40t711-40"
        opacity={0.27}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 351q355.5-151 711 49t711-49"
        opacity={0.29}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 342q355.5-142 711 58t711-58"
        opacity={0.31}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 333q355.5-133 711 67t711-67"
        opacity={0.33}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 324q355.5-124 711 76t711-76"
        opacity={0.35}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 315q355.5-115 711 85t711-85"
        opacity={0.37}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 306q355.5-106 711 94t711-94"
        opacity={0.39}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 297q355.5-97 711 103t711-103"
        opacity={0.4}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 288q355.5-88 711 112t711-112"
        opacity={0.42}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 279q355.5-79 711 121t711-121"
        opacity={0.44}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 270q355.5-70 711 130t711-130"
        opacity={0.46}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 261q355.5-61 711 139t711-139"
        opacity={0.48}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 252q355.5-52 711 148t711-148"
        opacity={0.5}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 243q355.5-43 711 157t711-157"
        opacity={0.52}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 234q355.5-34 711 166t711-166"
        opacity={0.53}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 225q355.5-25 711 175t711-175"
        opacity={0.55}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 216q355.5-16 711 184t711-184"
        opacity={0.57}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 207q355.5-7 711 193t711-193"
        opacity={0.59}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 198q355.5 2 711 202t711-202"
        opacity={0.61}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 189q355.5 11 711 211t711-211"
        opacity={0.63}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 180q355.5 20 711 220t711-220"
        opacity={0.65}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 171q355.5 29 711 229t711-229"
        opacity={0.66}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 162q355.5 38 711 238t711-238"
        opacity={0.68}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 153q355.5 47 711 247t711-247"
        opacity={0.7}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 144q355.5 56 711 256t711-256"
        opacity={0.72}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 135q355.5 65 711 265t711-265"
        opacity={0.74}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 126q355.5 74 711 274t711-274"
        opacity={0.76}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 117q355.5 83 711 283t711-283"
        opacity={0.78}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 108q355.5 92 711 292t711-292"
        opacity={0.8}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 99q355.5 101 711 301t711-301"
        opacity={0.81}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 90q355.5 110 711 310t711-310"
        opacity={0.83}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 81q355.5 119 711 319t711-319"
        opacity={0.85}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 72q355.5 128 711 328t711-328"
        opacity={0.87}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 63q355.5 137 711 337t711-337"
        opacity={0.89}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 54q355.5 146 711 346t711-346"
        opacity={0.91}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 45q355.5 155 711 355t711-355"
        opacity={0.93}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 36q355.5 164 711 364t711-364"
        opacity={0.94}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 27q355.5 173 711 373t711-373"
        opacity={0.96}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
      <motion.path
        d="M0 18q355.5 182 711 382t711-382"
        opacity={0.98}
        style={{
          WebkitUserSelect: 'auto',
        }}
      />
    </motion.g>
  </motion.svg>
);
