  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: 'OK' });


    axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
