import React, { useEffect, useState } from 'react'
import {
  Typography,
  Paper,
  Grid,
  IconButton,
  Popover,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material'
import Icon from 'src/@core/components/icon'

import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, subMonths, addMonths } from 'date-fns'

const CalendarView = () => {
  const today = new Date()
  const [fromDate, setFromDate] = useState<number | Date>()
  const [toDate, setToDate] = useState<number | Date>()
  const [currentMonth, setCurrentMonth] = useState(today)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl1, setAnchorEl1] = useState(null)
  const [isDateSelected, setIsDateSelected] = useState({
    today: false,
    yesterday: false,
    thisWeek: false,
    lastWeek: false,
    thisMonth: false,
    lastMonth: false,
    thisYear: false
  })

  const openCalendarPopup = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const closeCalendarPopup = () => {
    setAnchorEl(null)
  }

  const openCalendarPopup1 = (event: any) => {
    setAnchorEl1(event.currentTarget)
  }

  const closeCalendarPopup1 = () => {
    setAnchorEl1(null)
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const open = Boolean(anchorEl)
  const open1 = Boolean(anchorEl1)
  const startOfCurrentMonth = startOfMonth(currentMonth)
  const endOfCurrentMonth = endOfMonth(currentMonth)
  const daysInCurrentMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth
  })

  // Calculate the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ...)
  const firstDayOfWeek = getDay(startOfCurrentMonth)

  // Create a matrix to organize the days into weeks
  const weeks = []
  let currentWeek: any = []
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null) // Fill in empty cells for days before the start of the month
  }
  daysInCurrentMonth.forEach(day => {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })
  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  // Function to update the selected date
  const handleDateSelection = (dateKey: string) => {
    setIsDateSelected(prev => ({
      ...Object.keys(prev).reduce((acc: any, key: any) => {
        acc[key] = key === dateKey

        return acc
      }, {})
    }))
  }

  const handleToday = () => {
    const today = new Date()
    setFromDate(today)
    setToDate(today)
  }

  const handleYesterday = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    setFromDate(yesterday)
    setToDate(yesterday)
    setIsDateSelected(prev => ({ ...prev, yesterday: true }))
  }

  const handleThisWeek = () => {
    const startOfWeek = new Date()
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
    const endOfWeek = new Date()
    endOfWeek.setDate(startOfWeek.getDate() + 6)
    setFromDate(startOfWeek)
    setToDate(endOfWeek)
    setIsDateSelected(prev => ({ ...prev, thisWeek: true }))
  }

  const handleLastWeek = () => {
    const startOfWeek = new Date()
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - 7)
    const endOfWeek = new Date()
    endOfWeek.setDate(startOfWeek.getDate() + 6)
    setFromDate(startOfWeek)
    setToDate(endOfWeek)
    setIsDateSelected(prev => ({ ...prev, lastWeek: true }))
  }

  const handleThisMonth = () => {
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    const endOfMonth = new Date()
    endOfMonth.setMonth(endOfMonth.getMonth() + 1)
    endOfMonth.setDate(0)
    setFromDate(startOfMonth)
    setToDate(endOfMonth)
    setIsDateSelected(prev => ({ ...prev, thisMonth: true }))
  }

  const handleLastMonth = () => {
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setMonth(startOfMonth.getMonth() - 1)
    const endOfMonth = new Date()
    endOfMonth.setDate(0)
    setFromDate(startOfMonth)
    setToDate(endOfMonth)
    setIsDateSelected(prev => ({ ...prev, lastMonth: true }))
  }

  const handleThisYear = () => {
    const startOfYear = new Date()
    startOfYear.setMonth(0)
    startOfYear.setDate(1)
    const endOfYear = new Date()
    endOfYear.setMonth(11)
    endOfYear.setDate(31)
    setFromDate(startOfYear)
    setToDate(endOfYear)
    setIsDateSelected(prev => ({ ...prev, thisYear: true }))
  }

  useEffect(() => {
    if (fromDate instanceof Date && toDate instanceof Date) {
      // Save fromDate and toDate as ISO 8601 date strings in localStorage
      window.localStorage.setItem('fromDates', fromDate.toISOString())
      window.localStorage.setItem('toDates', toDate.toISOString())
    }
  }, [fromDate, toDate])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Paper elevation={3} sx={{ paddingInline: 3, marginBlock: 5 }}>
        <Grid container justifyContent='space-between' alignItems='center' minHeight={50}>
          <Typography variant='h6'>기간: </Typography>
          <IconButton onClick={openCalendarPopup} color={fromDate ? 'primary' : 'secondary'}>
            <Icon icon='mdi:calendar' fontSize={30} />
            <Typography>
              {fromDate ? (
                <Typography variant='body1' align='center'>
                  {format(fromDate, 'd.MM.yy')}
                </Typography>
              ) : (
                '-- -- --'
              )}
            </Typography>
          </IconButton>
          <Typography>-</Typography>
          <IconButton onClick={openCalendarPopup1} color={toDate ? 'primary' : 'secondary'}>
            <Icon icon='mdi:calendar' fontSize={30} />
            <Typography>
              {toDate ? (
                <Typography variant='body1' align='center'>
                  {format(toDate, 'd.MM.yy')}
                </Typography>
              ) : (
                '-- -- --'
              )}
            </Typography>
          </IconButton>
          <Popover
            open={open1}
            anchorEl={anchorEl1}
            onClose={closeCalendarPopup1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                  <IconButton onClick={prevMonth}>
                    <Icon icon='mdi:arrow-left' fontSize='20' />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant='h6' align='center'>
                    {format(currentMonth, 'MMMM yyyy')}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={nextMonth}>
                    <Icon icon='mdi:arrow-right' />
                  </IconButton>
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <TableCell key={day}>{day}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weeks.map((week, weekIndex) => (
                    <TableRow key={weekIndex}>
                      {week.map((day: any, dayIndex: number) => (
                        <TableCell key={dayIndex} onClick={() => setToDate(day)} style={{ cursor: 'pointer' }}>
                          {day && format(day, 'd')}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Popover>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={closeCalendarPopup}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                  <IconButton onClick={prevMonth}>
                    <Icon icon='mdi:arrow-left' fontSize='20' />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant='h6' align='center'>
                    {format(currentMonth, 'MMMM yyyy')}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={nextMonth}>
                    <Icon icon='mdi:arrow-right' />
                  </IconButton>
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <TableCell key={day}>{day}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weeks.map((week, weekIndex) => (
                    <TableRow key={weekIndex}>
                      {week.map((day: any, dayIndex: number) => (
                        <TableCell key={dayIndex} onClick={() => setFromDate(day)} style={{ cursor: 'pointer' }}>
                          {day && format(day, 'd')}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Popover>
          <Button
            variant='contained'
            color={isDateSelected.today ? 'primary' : 'secondary'}
            onClick={() => {
              handleToday()
              handleDateSelection('today')
            }}
          >
            오늘
          </Button>
          <Button
            variant='contained'
            color={isDateSelected.yesterday ? 'primary' : 'secondary'}
            onClick={() => {
              handleYesterday()
              handleDateSelection('yesterday')
            }}
          >
            어제
          </Button>

          <Button
            variant='contained'
            color={isDateSelected.thisWeek ? 'primary' : 'secondary'}
            onClick={() => {
              handleThisWeek()
              handleDateSelection('thisWeek')
            }}
          >
            이번주
          </Button>
          <Button
            variant='contained'
            color={isDateSelected.lastWeek ? 'primary' : 'secondary'}
            onClick={() => {
              handleLastWeek()
              handleDateSelection('lastWeek')
            }}
          >
            지난주
          </Button>
          <Button
            variant='contained'
            color={isDateSelected.thisMonth ? 'primary' : 'secondary'}
            onClick={() => {
              handleThisMonth()
              handleDateSelection('thisMonth')
            }}
          >
            이번달
          </Button>
          <Button
            variant='contained'
            color={isDateSelected.lastMonth ? 'primary' : 'secondary'}
            onClick={() => {
              handleLastMonth()
              handleDateSelection('lastMonth')
            }}
          >
            지난달
          </Button>
          <Button
            variant='contained'
            color={isDateSelected.thisYear ? 'primary' : 'secondary'}
            onClick={() => {
              handleThisYear()
              handleDateSelection('thisYear')
            }}
          >
            연초후
          </Button>
        </Grid>
      </Paper>
    </div>
  )
}

export default CalendarView
