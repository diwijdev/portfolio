import { motion } from "framer-motion";

const BrandLogo = ({ size = 40, className = "" }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 399 399"
      fill="none"
      className={className}
      initial="rest"
      animate="rest1"
      whileHover="hover"
      variants={{
        rest: { opacity: 0, scale: 1 },
        rest1: { opacity: 0.5, scale: 1, transition: { duration: 0.3 } },
        hover: { opacity: 1, scale: 1.1, transition: { duration: 0.3 } },
      }}
    >
      <defs>
        <linearGradient id="lbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
          <stop offset="0%" stopColor="#F4F4ED" />
          <stop offset="50%" stopColor="#DFE4EF" />
          <stop offset="100%" stopColor="#669999" />
        </linearGradient>

        <linearGradient id="rbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
          <stop offset="0%" stopColor="#F4F4ED" />
          <stop offset="35%" stopColor="#DFE4EF" />
          <stop offset="90%" stopColor="#669999" />
        </linearGradient>

        <linearGradient id="slashGradient" x1="0" y1="0" x2="0.62" y2="1">
          <stop offset="30%" stopColor="#ED1B68" />
          <stop offset="100%" stopColor="#9f0b1d" />
        </linearGradient>
      </defs>

      <path
        d="M176.164 68.9825L59.4857 185.661L23.3908 221.756L59.4857 257.851L176.164 374.53L212.259 338.435L95.5806 221.756L212.259 105.077L176.164 68.9825Z"
        fill="url(#lbracketGradient)"
      />
      <rect
        x="362.905"
        y="399"
        width="513.225"
        height="51.0459"
        transform="rotate(-135 362.905 399)"
        fill="url(#slashGradient)"
      />
      <path
        d="M337.612 140.551L373.707 176.646L337.612 212.741L220.933 329.42L184.838 293.325L301.517 176.646L184.838 59.9671L220.933 23.8722L337.612 140.551Z"
        fill="url(#rbracketGradient)"
      />
    </motion.svg>
  );
};

export default BrandLogo;
