const experimentOptions = {
  "Your First Experiment": [
    "Your users are diverse. They are from all around the world, they span an age range, and they use different devices.",
    "Peaks can help you give each and every one the best possible experience with Your first experiment (Coming Soon).",
  ],
  "Adaptive Experiments": [
    "Your users are diverse. They are from all around the world, they span an age range, and they use different devices.",
    "Peaks can help you giv each and every one the best possible experience with Adaptive Experiment (Coming Soon).",
  ],
  "Beyond CTR": [
    "Your users are diverse. They are from all around the world, they span an age range, and they use different devices.",
    "Peaks can help you gie each and every one the best possible experience with Beyond CTR  (Coming Soon).",
  ],
  Personalization: [
    "Your user are dverse. They are from all around the world, they span an age range, and they use different devices.",
    "Peaks can help you gie each and every one the best possible experience with Personalization (Coming Soon).",
  ],
  "Content Personalization": [
    "Your user are dverse. They are from all around the world, they span an age range, and they use different devices.",
    "Peaks can help you gie each and every one the best possible experience with Content Personalization (Coming Soon).",
  ],
};

function removeExperimentOptions() {
  const elements = document.getElementsByClassName("option");
  for (const element of elements) {
    element.classList.remove("selected");
  }
}
function switchExperimentOption(option) {
  const key = option.getAttribute("name");
  const lines = experimentOptions[key];
  removeExperimentOptions();
  option.classList.add("selected");
  document.getElementById("line-one").innerHTML = lines[0];
  document.getElementById("line-one").innerHTML = lines[1];
}

const usingOptions = {
  sampling: {
    open: `
  <div class="code-container">
    <div class="highlight" style="background: #ffffff">
        <pre style="line-height: 125%;"><span></span>fetch(<span style="font-style: italic">"https://peaks.bandits.deta.app/public/experiments/{experiment_key}/get_intervention"</span>, {
        method: <span style="font-style: italic">"GET"</span>,
    });
        </pre>
    </div>
</div>`,
    close: "Send a GET request to the following URL to sample an option",
  },
  updating: {
    open: `  <div class="code-container">
      <div class="highlight" style="background: #ffffff">
          <pre style="line-height: 125%;"><span></span>fetch(<span style="font-style: italic">"https://peaks.bandits.deta.app/public/experiments/update"</span>, {
          method: <span style="font-style: italic">"POST"</span>,
          body: JSON.stringify({
              key: <span style="font-style: italic">"x1"</span>,
              arm_name: <span style="font-style: italic">"red"</span>,
              outcome: 1,
          }),
          headers: {
              <span style="font-style: italic">"Content-Type"</span>: <span style="font-style: italic">"application/json"</span>,
          },
      });
          </pre>
      </div>
  </div>`,
    close: "Whenever an event happens, send a POST request to your personal Peaks instance.",
  },
  analyzing: {
    open: `
    <div class="code-container">
      <div class="highlight" style="background: #ffffff">
          <pre style="line-height: 125%;"><span></span>fetch(<span style="font-style: italic">"https://peaks.bandits.deta.app/public/experiments/{experiment_key}/get_intervention"</span>, {
          method: <span style="font-style: italic">"GET"</span>,
      });
          </pre>
      </div>
  </div>`,
    close: "Your Peaks instance will handle the rest, automatically adjusting ‘arm’ probabilities with each API call.",
  },
};



function switchUsing(option) {
  const key = option.getAttribute("name");
  const content = usingOptions[key];
  const isOpen = option.getAttribute("open") === "true";
  if (isOpen) {
    document.getElementById(key).innerHTML = content["close"];
    option.setAttribute("open", "false");
    option.classList.remove("selected");
  } else {
    option.classList.add("selected");
    document.getElementById(key).innerHTML = content["open"];
    option.setAttribute("open", "true");
  }
}
