import { SvgIcon } from "@mui/material";

const drawerWidth = 320;

const useSidebarmenu = () => {

    const HomeIcon = (props) => {
        return (
          <SvgIcon {...props}>
            <path d="M12 3L1 11.4L2.21 12.99L4 11.62V21H20V11.62L21.79 12.98L23 11.4L12 3ZM18 19H6V10.1L12 5.52L18 10.1V19ZM9 14C9 14.1978 8.94135 14.3911 8.83147 14.5556C8.72159 14.72 8.56541 14.8482 8.38268 14.9239C8.19996 14.9996 7.99889 15.0194 7.80491 14.9808C7.61093 14.9422 7.43275 14.847 7.29289 14.7071C7.15304 14.5673 7.0578 14.3891 7.01921 14.1951C6.98063 14.0011 7.00043 13.8 7.07612 13.6173C7.15181 13.4346 7.27998 13.2784 7.44443 13.1685C7.60888 13.0586 7.80222 13 8 13C8.26522 13 8.51957 13.1054 8.70711 13.2929C8.89464 13.4804 9 13.7348 9 14ZM12 13C12.1978 13 12.3911 13.0586 12.5556 13.1685C12.72 13.2784 12.8482 13.4346 12.9239 13.6173C12.9996 13.8 13.0194 14.0011 12.9808 14.1951C12.9422 14.3891 12.847 14.5673 12.7071 14.7071C12.5673 14.847 12.3891 14.9422 12.1951 14.9808C12.0011 15.0194 11.8 14.9996 11.6173 14.9239C11.4346 14.8482 11.2784 14.72 11.1685 14.5556C11.0586 14.3911 11 14.1978 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13ZM15 14C15 13.8022 15.0586 13.6089 15.1685 13.4444C15.2784 13.28 15.4346 13.1518 15.6173 13.0761C15.8 13.0004 16.0011 12.9806 16.1951 13.0192C16.3891 13.0578 16.5673 13.153 16.7071 13.2929C16.847 13.4327 16.9422 13.6109 16.9808 13.8049C17.0194 13.9989 16.9996 14.2 16.9239 14.3827C16.8482 14.5654 16.72 14.7216 16.5556 14.8315C16.3911 14.9414 16.1978 15 16 15C15.7348 15 15.4804 14.8946 15.2929 14.7071C15.1054 14.5196 15 14.2652 15 14Z"/>
          </SvgIcon>
        );
      }

    return {
        drawerWidth,
        HomeIcon,
    }
}

export default useSidebarmenu;
