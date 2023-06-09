function bcapicall(event) {
    event.preventDefault();
    let search = document.getElementById("searchbc").value;
    let url;
    
    if (search.startsWith('1') || search.startsWith('3')) {
      url = 'https://blockchain.info/rawaddr/' + search;
    } else if (search.startsWith('bc1')) {
      url = 'https://blockchain.info/rawaddr/' + search;
    } else if (search.startsWith('L')) {
      alert("Litecoin (LTC)");
      return;
    } else if (search.startsWith('0x')) {
      alert("Ethereum (ETH)");
      return;
    } else if (search.startsWith('X') || search.startsWith('r')) {
      alert("Ripple (XRP)");
      return;
    } else if (search.startsWith('t1') || search.startsWith('tb1')) {
      alert("Bitcoin Testnet");
      return;
    }
  
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          alert(response.status);
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(function (data) {
        var address = data.address;
        var totalreceived = data.total_received;
        var totalsent = data.total_sent;
        var finalbalance = data.final_balance;
        var doublespend = data.txs[2];
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = `<p>Address: ${address}</p>
        <p>Total Received: ${totalreceived}</p>
        <p>Total Sent: ${totalsent}</p>
        <p>Final Balance: ${finalbalance}</p>
        <p>Double spent: ${doublespend}</p>`;
        console.log(data);
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }
  