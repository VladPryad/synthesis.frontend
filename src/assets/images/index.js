import SvgIcon from '@material-ui/core/SvgIcon';

export const Element = (props) => (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
            <path d="M5,5
            l0,88
            M5,49
            l35,-44z
            l40,44" />
    </SvgIcon>
);

export const Particle = (props) => (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
            <path d="M65,10
            l-60,0 0,80 60,0
            M5,50
            l50,0" />
    </SvgIcon>
);

export const Molecule = (props) => (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
            <path d="M60,10
            C-10,0 -10,100 60,90
            l0,-40 -20,0" />
    </SvgIcon>
);

export const MainLogo = (props) => (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
            <path d="M5,90
            l30,-80 30,80
            M20,50
            l30,0" />
    </SvgIcon>
);
  