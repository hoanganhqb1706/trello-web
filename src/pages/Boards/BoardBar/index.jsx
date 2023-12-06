import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgcolor: 'primary.50' }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }} >
        <Chip sx={ MENU_STYLES }
          icon={<DashboardIcon />}
          label="HoangAnh MERN STACK"
          clickable
          // onClick={() => {}}
        />
        <Chip sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          // onClick={() => {}}
        />
        <Chip sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          // onClick={() => {}}
        />
        <Chip sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          clickable
          // onClick={() => {}}
        />
        <Chip sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          // onClick={() => {}}
        />
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }} >

        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' }
            }
          }}
        >
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/350937164_995435571824312_2596093544910412396_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=eITYndUKMlwAX9QMd0r&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDRJu4aWYXenRIY83AokLtQ_KGBf3AI6TzZZS3GtuFZsg&oe=65724870'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/343943016_740125157794488_6636252472453995851_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=bGbZyAIZB8UAX9bk8Gv&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfArGb8Wk5jXYgV9OzvD2NywC10ei_GEAdQQX0xgfJR3cw&oe=65725782'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/240131167_1655491534660080_114503612342386688_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=Iurqp9RDSWEAX996kxZ&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBaa6kJaIHA-SRtZUMOgiEBLprI4oNDW2MUdf08p89C6A&oe=657292D7'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/207115697_1626532660889301_5451960153624664500_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=RKH_EWb6u8AAX_7125x&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCyQLXYwPae5pfP-deG2y0ylpAgzhh4FD_yZqlbp_in4g&oe=6573AA23'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/120331640_1408143106061592_2813653261889883309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=sQua3tMQr9UAX9Vq6D9&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfD6rnkynvt3tQDj8ZaxUzEuN8nJTuWdBtAMXLejY4301A&oe=65958E90'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/93785395_1277013142507923_8644080140894076928_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=bwlfLdRvTFcAX_AHqqT&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBS83rqg2tCE93f0My0w-59Q3AFWDNI451JOHZ-gjgJ8Q&oe=6595BA08'
            />
          </Tooltip>
          <Tooltip title='HoangAnh'>
            <Avatar
              alt="Hoang Anh"
              src='https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/76767425_1139937559548816_5417070052321001472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qQ3FAFwYlzkAX9bXZsM&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA9EgKR8RWesIujFFJ6QroGixz7rprE4o0x0vdI3vI4xg&oe=65959EBF'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
