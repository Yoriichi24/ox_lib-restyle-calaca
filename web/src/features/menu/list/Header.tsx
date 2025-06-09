import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';

/* TODO: WRAP A BORDER AROUND THE WHOLE BOX */

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    borderLeft: `1px solid rgba(50, 50, 50, 0.808)`,
    borderRight: `1px solid rgba(50, 50, 50, 0.808)`,
    borderTop: `1px solid rgba(50, 50, 50, 0.808)`,
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
    backgroundColor: theme.colors.black2[5],
    height: 'auto',
    width: 384,
    paddingTop: 20,
    paddingBottom: 25,
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 3,
    background: `linear-gradient(to right, ${theme.colors.black[5]}, ${theme.colors.red[5]})`,
  },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Text className={classes.heading}>{title}</Text>
      <div className={classes.line} />
    </Box>
  );
};

export default React.memo(Header);
