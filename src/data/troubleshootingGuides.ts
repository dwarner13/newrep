export interface TroubleshootingGuide {
  id: string;
  title: string;
  appliance: string;
  description: string;
  quickFixes: string[];
  whenToCall: string[];
}

export const troubleshootingGuides: TroubleshootingGuide[] = [
  {
    id: 'refrigerator-not-cooling',
    title: 'Refrigerator Not Cooling Properly',
    appliance: 'Refrigerator',
    description: `One of the most common refrigerator issues homeowners face is inadequate cooling. This problem can stem from various factors, and understanding them is crucial for maintaining your food's freshness. The most frequent cause is improper temperature settings, which can be easily adjusted using the control panel. However, if the settings are correct, the issue might be related to the condenser coils. These coils, located either behind or underneath your refrigerator, can become covered with dust and debris over time, reducing their efficiency. Regular cleaning of these coils every six months can significantly improve performance. Another potential cause is a faulty door seal (gasket). A compromised seal allows warm air to enter, making your refrigerator work harder and less efficiently.`,
    quickFixes: [
      'Check and adjust temperature settings',
      'Clean condenser coils',
      'Inspect and clean door seals',
      'Ensure proper food organization',
      'Check for blocked air vents'
    ],
    whenToCall: [
      'Temperature remains inconsistent after trying quick fixes',
      'Strange noises from the cooling system',
      'Visible frost buildup in the freezer',
      'Water leaking on the floor'
    ]
  },
  {
    id: 'washer-not-draining',
    title: 'Washing Machine Not Draining',
    appliance: 'Washer',
    description: `When your washing machine won't drain properly, it can be frustrating and potentially cause water damage. The most common cause is a clogged drain pump filter, which catches small items like coins, buttons, and debris. This filter is usually located behind a small panel at the bottom front of the machine. Another frequent cause is a kinked or clogged drain hose. Check the hose for any visible kinks or bends that might restrict water flow. The drain pump itself might also be malfunctioning, which can happen if foreign objects get stuck inside or if the pump motor fails.`,
    quickFixes: [
      'Clean the drain pump filter',
      'Check and straighten drain hose',
      'Run an empty cycle with hot water',
      'Reduce detergent usage',
      'Clear the standpipe or sink drain'
    ],
    whenToCall: [
      'Persistent drainage issues after cleaning filters',
      'Unusual sounds during drain cycle',
      'Water leaking from machine',
      'Burning smell during operation'
    ]
  },
  {
    id: 'dryer-not-heating',
    title: 'Dryer Not Heating',
    appliance: 'Dryer',
    description: `A dryer that tumbles but doesn't heat is a common issue that can significantly impact your laundry routine. For electric dryers, the most frequent cause is a blown thermal fuse, which is a safety device that prevents overheating. This often happens due to restricted airflow from lint buildup. For gas dryers, the issue might be related to the gas supply or igniter. Regular maintenance, especially cleaning the lint filter after each use and checking the vent duct annually, can prevent many heating problems.`,
    quickFixes: [
      'Clean lint filter and vent duct',
      'Check circuit breaker',
      'Verify gas supply (for gas dryers)',
      'Clean moisture sensors',
      'Check door seal'
    ],
    whenToCall: [
      'No heat after checking power and venting',
      'Burning smell during operation',
      'Clothes taking multiple cycles to dry',
      'Unusual noises when running'
    ]
  },
  {
    id: 'dishwasher-not-cleaning',
    title: 'Dishwasher Not Cleaning Properly',
    appliance: 'Dishwasher',
    description: `Poor cleaning performance in dishwashers often stems from several common issues. The spray arms might be clogged with mineral deposits or food particles, preventing proper water distribution. Regular inspection and cleaning of these arms can improve performance significantly. Water temperature is crucial for effective cleaning - most dishwashers need water at least 120°F (49°C). The filter system at the bottom of your dishwasher needs regular cleaning to prevent food particles from recirculating.`,
    quickFixes: [
      'Clean spray arms and filters',
      'Check water temperature',
      'Use proper detergent amount',
      'Load dishes correctly',
      'Run hot water before starting'
    ],
    whenToCall: [
      'Persistent poor cleaning after maintenance',
      'Water not reaching upper rack',
      'Strange noises during operation',
      'Water leaks or drainage issues'
    ]
  },
  {
    id: 'stove-burner-issues',
    title: 'Stove Burner Not Working',
    appliance: 'Stove',
    description: `Stove burner problems can vary depending on whether you have an electric or gas stove. For electric stoves, loose or corroded connections between the burner and the socket are common issues. You can often fix this by removing and cleaning the burner connections. For gas stoves, the most common problems include clogged burner ports or faulty igniters. Regular cleaning of burner ports and caps can prevent many issues. If you smell gas, immediately turn off the gas supply and contact a professional.`,
    quickFixes: [
      'Clean burner ports and caps',
      'Check electrical connections',
      'Remove and clean burner elements',
      'Test all burner settings',
      'Verify power/gas supply'
    ],
    whenToCall: [
      'Gas smell or suspected leak',
      'Sparking or electrical issues',
      'Uneven flame pattern',
      'Clicking sound but no ignition'
    ]
  },
  {
    id: 'ice-maker-problems',
    title: 'Ice Maker Not Working',
    appliance: 'Refrigerator',
    description: `Ice maker problems can be particularly frustrating, especially during warm weather. Common issues include frozen water lines, faulty water inlet valves, or problems with the ice maker assembly itself. The water supply line can freeze if the freezer temperature is set too low or if there's a kink in the line. Sometimes, mineral deposits from hard water can clog the water filter or inlet valve, reducing water flow. The ice maker's motor might also fail, preventing the ejection of ice cubes.`,
    quickFixes: [
      'Check water supply connection',
      'Clear any ice blockages',
      'Replace water filter',
      'Adjust freezer temperature',
      'Clean ice maker components'
    ],
    whenToCall: [
      'No ice production after basic troubleshooting',
      'Water leaking into freezer',
      'Unusual ice taste or appearance',
      'Mechanical problems with ice maker'
    ]
  }
];